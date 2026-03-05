const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    enum: ["Owner", "Manager", "Member"]
  },
  tenantId: String,
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization"
  }
});

module.exports = mongoose.model("User", UserSchema);