const mongoose = require("mongoose");
const DepartmentSchema = {
  department_name: String,
};

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = mongoose.model("Department", DepartmentSchema);
