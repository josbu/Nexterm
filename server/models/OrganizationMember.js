const Sequelize = require("sequelize");
const db = require("../utils/database");

module.exports = db.define("organizationMembers", {
    organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    role: {
        type: Sequelize.ENUM("owner", "admin", "member"),
        defaultValue: "member",
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM("pending", "active"),
        defaultValue: "pending",
        allowNull: false,
    },
    invitedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ["organizationId", "accountId"],
        },
    ],
});