const { Pool } = require('pg')
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`SELECT students.id, students.name, cohorts.name as cohortname, cohort_id 
            FROM students 
            JOIN cohorts ON cohorts.id = cohort_id
            WHERE cohorts.name LIKE '${process.argv[2]}%' LIMIT ${process.argv[3] || 5};`)
.then(res => {
  //console.log(res.rows);
  res.rows.forEach(user => {
    console.log(`${user.name} has an id=${user.id} and was in the cohort# ${user.cohort_id} - ${user.cohortname}`);
  })
})
.catch(err => console.error('query error', err.stack));