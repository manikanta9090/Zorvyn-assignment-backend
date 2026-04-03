const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "User not authenticated" });
    }

    // Handle Bearer
    if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }

    try {
        const decoded = jwt.verify(token, "secretkey");

        req.user = decoded; // 🔥 THIS LINE IS CRITICAL

        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};