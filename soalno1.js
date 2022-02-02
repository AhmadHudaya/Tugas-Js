function LampuLaluLintas(lampu){
  if (lampu == `merah` || lampu == `Merah`){
    console.log(`Berhenti`);
  }
  else if (lampu == `kuning` || lampu == `Kuning`){
    console.log('Hati-Hati');
  } 
  else if (lampu == `hijau`|| lampu == `Hijau`){
    console.log(`Maju!`);
  }
}
LampuLaluLintas(`Hijau`);
