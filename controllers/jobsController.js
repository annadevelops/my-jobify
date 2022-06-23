//@desc   Create user's jobs
//@route    POST /api/v1/jobs
//@access   Private
const createJob = (req, res) => {
  res.send("Create Job");
};

//@desc   Delete user's jobs
//@route    DELETE /api/v1/jobs/:id
//@access   Private
const deleteJob = (req, res) => {
  res.send("Delete Job");
};

//@desc   Get all user's jobs
//@route    GET /api/v1/jobs
//@access   Private
const getAllJobs = (req, res) => {
  res.send("Get All Job");
};

//@desc   Update user's job
//@route    PATCH /api/v1/jobs/:id
//@access   Private
const updateJob = (req, res) => {
  res.send("Update Job");
};

//@desc   Get user's jobs stats
//@route    GET /api/v1/jobs/stats
//@access   Private
const showStats = (req, res) => {
  res.send("Show Job Stats");
};

export { createJob, deleteJob, updateJob, getAllJobs, showStats };
