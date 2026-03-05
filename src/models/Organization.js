const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tenantId: {
    type: String,
    required: true,
    unique: true
  },
  subscriptionPlan: {
    type: String,
    default: "free"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Organization", OrganizationSchema);