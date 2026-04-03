const Record = require("../models/Record");

// Get Summary
exports.getSummary = async(req, res) => {
    try {
        const records = await Record.find();

        let totalIncome = 0;
        let totalExpense = 0;

        records.forEach((r) => {
            if (r.type === "income") totalIncome += r.amount;
            else totalExpense += r.amount;
        });

        const balance = totalIncome - totalExpense;

        res.json({
            totalIncome,
            totalExpense,
            balance,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};