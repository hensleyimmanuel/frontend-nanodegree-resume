$("#main").append("Immanuel Hensley");

var name = "Immanuel Hensley";
var role = "Front-End Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);