const { Pool } = require('pg')
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort_name = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohort_name}%`, limit];
console.log(values);
pool.query(`SELECT students.id, students.name, cohorts.name as cohortname, cohort_id 
            FROM students 
            JOIN cohorts ON cohorts.id = cohort_id
            WHERE cohorts.name LIKE $1 LIMIT $2;`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id=${user.id} and was in the cohort# ${user.cohort_id} - ${user.cohortname}`);
  })
})
.catch(err => console.error('query error', err.stack));