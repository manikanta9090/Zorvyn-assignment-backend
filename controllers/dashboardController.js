const Record = require("../models/Record");

exports.getSummary = async(req, res) => {
    try {
        const records = await Record.find();

        let totalIncome = 0;
        let totalExpense = 0;
        const categoryTotals = {};

        records.forEach((r) => {
            // Total income/expense
            if (r.type === "income") totalIncome += r.amount;
            else totalExpense += r.amount;

            // Category totals
            categoryTotals[r.category] =
                (categoryTotals[r.category] || 0) + r.amount;
        });

        const balance = totalIncome - totalExpense;

        res.json({
            totalIncome,
            totalExpense,
            balance,
            categoryTotals, // 👈 ADD THIS
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};