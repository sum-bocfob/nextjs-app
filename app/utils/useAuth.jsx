import { jwtVerify } from "jose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [loginUserEmail, setLoginUserEmail] = useState("");

    const router = useRouter();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                router.push("/user/login");
            }

            try {
                const secretKey = new TextEncoder().encode("next-market-app-book");
                const decodedJwt = jwtVerify(token, secretKey);
                setLoginUserEmail(decodedJwt.payload.email);
            } catch {
                router.push("/user/login");
            }
        };
        checkToken();
    }, [router]);

    return loginUserEmail;
};

export default useAuth;
