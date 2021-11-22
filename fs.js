const fs = require('fs');

let state_data = [];

let states_csv = fs.readFileSync('data.csv', 'utf8');

let states = states_csv.split("\r");
for (let i = 0; i < states.length; i++){
  let state = states[i]
//states.forEach(function(state) {
  let state_info = state.split(',');
  let data = {};
  if((state_info[0]!== "0")&&(state_info[0]!=="")){
  data['state'] = state_info[0].substring(1);}
  if((state_info[1]!== "0")&&(state_info[1]!=="")){
  data['total'] = state_info[1];}
  if((state_info[2]!== "0")&&(state_info[2]!=="")){
  data['population'] = state_info[2];}
  if((state_info[3]!== "0")&&(state_info[3]!=="")){
  data['ratio'] = state_info[3];}
  if((state_info[4]!== "0")&&(state_info[4]!=="")){
  data['firearm'] = state_info[4];}
  if((state_info[5]!== "0")&&(state_info[5]!=="")){
  data['cutPierce'] = state_info[5];}
  if((state_info[6]!== "0")&&(state_info[6]!=="")){
  data['struckByAgainst'] = state_info[6];}
  if((state_info[7]!== "0")&&(state_info[7]!=="")){
  data['poisoning'] = state_info[7];}
  if((state_info[8]!== "0")&&(state_info[8]!=="")){
  data['hangingSuffocation'] = state_info[8];}
  if((state_info[9]!== "0")&&(state_info[9]!=="")){
  data['fall'] = state_info[9];}
  if((state_info[10]!== "0")&&(state_info[10]!=="")){
  data['drowning'] = state_info[10];}
  if((state_info[11]!== "0")&&(state_info[11]!=="")){
  data['fireBurn'] = state_info[11];}
  if((state_info[12]!== "0")&&(state_info[12]!=="")){
  data['motorVehicle'] = state_info[12];}
  if((state_info[13]!== "0")&&(state_info[13]!=="")){
  data['other'] = state_info[13];}
  if((state_info[14]!== "0")&&(state_info[14]!=="")){
  data['unknown'] = state_info[14];}
  state_data.push(data);
  data['number']= i
}
//});

fs.writeFileSync('compiled.json', JSON.stringify(state_data), 'utf8');
