const fs = require('fs');

let state_data = [];

let states_csv = fs.readFileSync('data.csv', 'utf8');

let states = states_csv.split("\r");
for (let i = 0; i < states.length; i++){
  let state = states[i]
//states.forEach(function(state) {
  let state_info = state.split(',');
  let data = {};
  data['state'] = state_info[0].substring(1);
  data['total'] = state_info[1];
  data['population'] = state_info[2];
  data['ratio'] = state_info[3];
  data['firearm'] = state_info[4];
  data['cutPierce'] = state_info[5];
  data['struckByAgainst'] = state_info[6];
  data['poisoning'] = state_info[7];
  data['hangingSuffocation'] = state_info[8];
  data['fall'] = state_info[9];
  data['drowning'] = state_info[10];
  data['fireBurn'] = state_info[11];
  data['motorVehicle'] = state_info[12];
  data['other'] = state_info[13];
  data['unknown'] = state_info[14];
  data['number']= i
  state_data.push(data);
}
//});

fs.writeFileSync('compiled.json', JSON.stringify(state_data), 'utf8');
