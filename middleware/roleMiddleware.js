module.exports = function(...allowedRoles) {
    return (req, res, next) => {
        // ✅ Prevent crash
        if (!req.user) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: "Access denied" });
        }

        next();
    };
};