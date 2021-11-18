const fs = require('fs');

let state_data = [];

let states_csv = fs.readFileSync('data.csv', 'utf8');

let states = states_csv.split("\n");

states.forEach(function(state) {
  let state_info = state.split(',');
  let data = {};
  data['state'] = state_info[0];
  data['total'] = state_info[1];
  data['population'] = state_info[2];
  data['ratio'] = state_info[3];

  // continue making like data['gun']= state_info[4] etc for all columns of data

  state_data.push(data);
});

fs.writeFileSync('compiled.json', JSON.stringify(state_data), 'utf8');
