const express = require("express");
const router = express.Router();

const InformationData = require("../mongoSchema/imotDataSchema");

router
  .get("/", async function (req, res) {
    try {
      // const filename = req.params.filename;
      // const filePath = path.join(__dirname, filename);
      const foundInformations = await InformationData.find();
      res.send(foundInformations);
      //res.sendFile(filePath);
    } catch (err) {
      res.status(400).json({
        message: "No Information was found..",
      });
    }
  })
  .post("/", async function (req, res) {
    const information = new InformationData({
      name: req.body.name,
      child_name: req.body.child_name,
      other_name: req.body.other_name,
      age: req.body.age,
      birth_date: req.body.birth_date,
      birth_location: req.body.birth_location,
      religion: req.body.religion,
      nation: req.body.nation,
      nrc: req.body.nrc,
      height: req.body.height,
      weight: req.body.weight,
      hair_color: req.body.hair_color,
      eyes_color: req.body.eyes_color,
      prominent_sign: req.body.prominent_sign,
      department: req.body.department,
      service_age: req.body.service_age,
      current_address: req.body.current_address,
      permanent_address: req.body.permanent_address,
      education: req.body.education,
      degree: req.body.degree,
      specialization: req.body.specialization,
      degree_year_received: req.body.degree_year_received,
      grade: req.body.grade,
      first_degree: req.body.first_degree,
      graduate_degree: req.body.graduate_degree,
      school_attended: req.body.school_attended,
      from_years: req.body.from_years,
      finished_years: req.body.finished_years,
      school_location: req.body.school_location,
      school_level: req.body.school_level,
      from_year_abroad: req.body.from_year_abroad,
      finished_year_abroad: req.body.finished_year_abroad,
      countries_visited: req.body.countries_visited,
      matter_of_visiting: req.body.matter_of_visiting,
      deposit_exchange: req.body.deposit_exchange,
      father_name: req.body.father_name,
      father_relative_name: req.body.father_relative_name,
      father_relativeness: req.body.father_relativeness,
      father_relativeness_gender: req.body.father_relativeness_gender,
      father_relativeness_citizen: req.body.father_relativeness_citizen,
      father_relativeness_job: req.body.father_relativeness_job,
      father_relativeness_location: req.body.father_relativeness_location,
      father_relativeness_note: req.body.father_relativeness_note,
      //mother
      mother_name: req.body.mother_name,
      mother_relative_name: req.body.mother_relative_name,
      mother_relativeness: req.body.mother_relativeness,
      mother_relativeness_gender: req.body.mother_relativeness_gender,
      mother_relativeness_citizen: req.body.mother_relativeness_citizen,
      mother_relativeness_job: req.body.mother_relativeness_job,
      mother_relativeness_location: req.body.mother_relativeness_location,
      mother_relativeness_note: req.body.mother_relativeness_note,

      //oversea
      oversea_name: req.body.oversea_name,
      oversea_relative_name: req.body.oversea_relative_name,
      oversea_relativeness: req.body.oversea_relativeness,
      oversea_relativeness_gender: req.body.oversea_relativeness_gender,
      oversea_relativeness_citizen: req.body.oversea_relativeness_citizen,
      oversea_relativeness_job: req.body.oversea_relativeness_job,
      oversea_relativeness_location: req.body.oversea_relativeness_location,
      oversea_relativeness_note: req.body.oversea_relativeness_note,

      //wife or husband
      love_name: req.body.love_name,
      love_relative_name: req.body.love_relative_name,
      love_relativeness: req.body.love_relativeness,
      love_relativeness_gender: req.body.love_relativeness_gender,
      love_relativeness_citizen: req.body.love_relativeness_citizen,
      love_relativeness_job: req.body.love_relativeness_job,
      love_relativeness_location: req.body.love_relativeness_location,
      love_relativeness_note: req.body.love_relativeness_note,
      //love father
      love_father_name: req.body.love_father_name,
      love_father_relative_name: req.body.love_father_relative_name,
      love_father_relativeness: req.body.love_father_relativeness,
      love_father_relativeness_gender: req.body.love_father_relativeness_gender,
      love_father_relativeness_citizen:
        req.body.love_father_relativeness_citizen,
      love_father_relativeness_job: req.body.love_father_relativeness_job,
      love_father_relativeness_location:
        req.body.love_father_relativeness_location,
      love_father_relativeness_note: req.body.love_father_relativeness_note,

      //love mother
      love_mother_name: req.body.love_mother_name,
      love_mother_relative_name: req.body.love_mother_relative_name,
      love_mother_relativeness: req.body.love_mother_relativeness,
      love_mother_relativeness_gender: req.body.love_mother_relativeness_gender,
      love_mother_relativeness_citizen:
        req.body.love_mother_relativeness_citizen,
      love_mother_relativeness_job: req.body.love_mother_relativeness_job,
      love_mother_relativeness_location:
        req.body.love_mother_relativeness_location,
      love_mother_relativeness_note: req.body.love_mother_relativeness_note,

      //son and daughter
      child_name_t: req.body.child_name_t,
      child_relative_name: req.body.child_relative_name,
      child_relativeness: req.body.child_relativeness,
      child_relativeness_gender: req.body.child_relativeness_gender,
      child_relativeness_citizen: req.body.child_relativeness_citizen,
      child_relativeness_job: req.body.child_relativeness_job,
      child_relativeness_location: req.body.child_relativeness_location,
      child_relativeness_note: req.body.child_relativeness_note,
      //oversea-relative

      oversea_relative_name_n: req.body.oversea_relative_name_n,
      oversea_relative_relativeness: req.body.oversea_relative_relativeness,
      oversea_relative_nation: req.body.oversea_relative_nation,
      oversea_relative_job: req.body.oversea_relative_job,
      oversea_relative_current_country:
        req.body.oversea_relative_current_country,
      oversea_relative_matter: req.body.oversea_relative_matter,
      oversea_relative_return: req.body.oversea_relative_return,
      //

      dept_action_taken: req.body.dept_action_taken,
      dept_action_taken_fact: req.body.dept_action_taken_fact,
      //dept_action_taken: req.body.dept_action_taken,
      dept_punishment: req.body.dept_punishment,
      //
      court_time: req.body.court_time,
      court_fact: req.body.court_fact,
      court_action: req.body.court_action,
      court_note: req.body.court_note,
      //
      degree_give_year: req.body.degree_give_year,
      what_type_degree: req.body.what_type_degree,
      degree_give_note: req.body.degree_give_note,

      //
      go_abroad: req.body.go_abroad,
      reason_go_abroad: req.body.reason_go_abroad,
      abroad_country: req.body.abroad_country,
      arrive_time_abroad: req.body.arrive_time_abroad,
      what_gov_abroad: req.body.what_gov_abroad,
      dept_when_arr_from_abroad: req.body.dept_when_arr_from_abroad,
      need_to_go_abroad: req.body.need_to_go_abroad,
      credentials_for_abroad: req.body.credentials_for_abroad,
      //
      submit_person_ticket: req.body.submit_person_ticket,
      submit_person_name: req.body.submit_person_name,
      submit_person_position: req.body.submit_person_position,
      submit_person_dept: req.body.submit_person_dept,
      //

      stuff_behavior: req.body.stuff_behavior,
      //
      date: req.body.date,
      //
      submit_person1_ticket: req.body.submit_person1_ticket,
      submit_person1_name: req.body.submit_person1_name,
      submit_person1_position: req.body.submit_person1_position,
      submit_person1_dept: req.body.submit_person1_dept,

      //

      headmaster_ticket: req.body.headmaster_ticket,
      headmaster_name: req.body.headmaster_name,
      headmaster_position: req.body.headmaster_position,
      headmaster_dept: req.body.headmaster_dept,
      headmaster_date: req.body.headmaster_date,
      //

      school_headmaster_ticket: req.body.school_headmaster_ticket,
      school_headmaster_name: req.body.school_headmaster_ticket,
      school_headmaster_position: req.body.school_headmaster_position,
      school_headmaster_dept: req.body.school_headmaster_dept,
      school_headmaster_dept_date: req.body.school_headmaster_dept_date,
    });
    try {
      await information.save();
      res.status(200).json({
        message: "Successfully add a new Information...",
      });
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  });

module.exports = router;
