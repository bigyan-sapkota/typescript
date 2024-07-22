let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  logged = "bigyan";
  console.log(logged);
}

sendAnalytics("The data");
