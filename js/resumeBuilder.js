var formattedName = HTMLheaderName.replace("%data%","Neil Opena");
var formattedRole = HTMLheaderRole.replace("%data%","Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);