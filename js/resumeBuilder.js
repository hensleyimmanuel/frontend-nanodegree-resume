// -- Lines below hold all information on my resume --

var bio = {
    "name": "Immanuel Hensley",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(502) - 219 - 0134",
        "email": "hensleyimmanuel@yahoo.com",
        "location": "500 Shenandoah Dr. Frankfort Kentucky 40601",
        "facebook": "https://www.facebook.com/hensleyimmanuel",
        "github": "hensleyimmanuel"
        },
    "welcomeMessage": "Hello welecome to my Resume please feel free to contact me.",
    "skills": ["awesomness","badass","programming"],
    "Pic": "me"
};
projects = {
    "projects": [
        {
            "title": "sample 1",
            "dates": "2004-2008",
            "description": "this is an example desciption",
            "image":['http://lorempixel.com/350/250']
        },
        {
            "title": "sample 2",
            "dates": "2004-2008",
            "description": "this is an example desciption",
            "image": ['http://lorempixel.com/400/200']
        },
    ]
};


work = {
    "jobs": [
        {
            "employer": "Pomeroy",
            "title": "Desktop Support Specialist",
            "date": "10/21/2013 - Present",
			"location": "5 Fountain place, Frankfort, KY 40601",
            "description": "Installing and configuring computer hardware operating systems and applications.  Monitoring and maintaining computer systems and networks;  Talking staff/clients through a series of actions, either face to face or over the telephone; Troubleshooting system and network problems and diagnosing and solving hardware/software faults;  Replacing parts as required;  Wrote complex routines for system critical procedure and Diagnostic Routines  Following diagrams and written instructions to repair a fault or set up a system;  Supporting the roll-out of new applications;  Setting up new accounts and profiles and dealing with password issues;  Responding within agreed time limits to call-outs;  Working continuously on a task until completion (or referral to third parties, if appropriate);  Prioritizing and managing many open cases at one time; Rapidly establishing a good working relationship with customers and other professionals (e.g., software developers);  Testing and evaluating new technology;  Conducting electrical safety checks on computer equipment  used Dame ware to remote into clients pc’s from around the state to resolve a wide array of issues.  Install and maintain programs that are vital to everyday functions.  Work with third party companies to resolve issues with dell switches, as well as running Ethernet cable to connect Ports to the domain.  Used Active Directory to manage and maintain all devices on the domain"
        },
        {
            "employer": "Kelly Services / Apple",
            "title": "Senior Advisor",
            "date": "05/27/2013 - 10/20/2013",
            "description": "As a Senior Technical Advisor with apple I take ownership of the extremely difficult and technical cases that cannot be handled by our Tier 1 technical group, As well as technical cases I also receive Supervisor request that come from our customers. I build a rapport with the customer and troubleshoot their issue by using different steps I feel necessary to solve the   issue in a timely manner. I create repairs for devices that cannot be fixed by the usual troubleshooting steps or that have physical damage. If I feel a customer has been wronged or has not received the type of treatment that they should have I offer an appeasement in the manner of a device such as an IPod Touch. Being a senior technical advisor I work with Security Issues, Refunds, IPhones, IPods, Ipads, MacBook’s, Airport, and ITunes (In all its forms)."
        },
        {
            "employer": "Adecco/Disability Determination Services",
            "title": "IT Staff Assistant",
            "date": "06/23/2011 - 08/16/2012",
            "description": "Wrote complex routines for System Procedures and diagnostic routines. Installed and maintained hardware and software such as operating systems, control systems, workstations, peripherals and communications devices, proprietary software packages, information dissemination tools, electronic mail and data base management software. Performed complex system generations, network device configuration generations, workstation installation, network address definitions. Assisted the development, network and production support staff in analyzing requirements for development, modification or retirement of state level or complex departmental systems. I was responsible for system support functions during relocation or conversion of critical data files and equipment. Monitored performance of servers on local area networks and takes action to mitigate network or system degradation. Coordinated the diagnostics and problem resolution with network support staff. Received complex problem reports, and resolves or refers to appropriate personnel. Provided technical assistance to other information systems staff, and I was responsible for systems recovery. I Insured that technical documentation and user manuals are accurate and current.  Provided customer support to staff of the Disability Determination Services (DDS). This included but is not limited to servicing computers, printers, network devices, and performing backup/restores requests. Installed printers, computers, Windows 7 imaging, and troubleshooting issues. Microsoft Share Point support. Scheduled repairs and working with service personnel, help desk duties. Telephone support to staffs for password issues. Weekend support and traveled to Louisville office when necessary. I have Experience with AS/400."
        }		
    ]
}
education ={
    "schools": [
        {
            "name": "Anderson County High School",
            "degree": "High School Diploma",
            "dates": "08/1/2004 - 05/24/2008",
            "location": "Lawrenceburg Ky",
            "majors": [
                "IT"
            ],
            "url": "http://http://www.anderson.kyschools.us/andersoncountyhighschool_home.aspx"
        },
        "onlineCourses",
        [
            {
                "Title": "Intro to HTML and CSS",
                "School": "Udacity",
                "Dates": "10/12/2014 - 12/8/2014",
                "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-3342528615/m-3343838767"
            },
            {
                "title": "How to use Gut and GitHub",
                "School": "Udacity",
                "dates": "12/8/2014 - 12/20/2014",
                "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd/l-3342528615/m-3343838767"
            },
            {
                "title": "JavaScript Basics",
                "schools": "Udacity",
                "dates": "01/05/2015 - Present",
                "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550"
            }
        ]
    ]
}
// -- Lines Below are appending my name and role to my resume --

function header() {
var name = "Immanuel Hensley";
var role = "Front-End Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
}
header();

//  -- Lines Below are the Skills sections appended to my resume --

if (bio.skills.length != 0) {
$('#header').append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
$('#skills').append(formattedSkill);
}

// -- Lines below are my jobs appended to my resume --
 
function displayWork() {
for (job in work.jobs) {
$('#workExperience').append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].date);
var formattedWorkDescritption = HTMLworkDescription.replace('%data%',work.jobs[job].description);
$('.work-entry:last').append(formattedEmployerTitle);
$('.work-entry:last').append(formattedWorkDates);
$('.work-entry:last').append(formattedWorkDescritption);
}
}
displayWork();

// -- Lines Below show location of each  click on screen --
 
$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   
  logClicks(x,y);
});

// -- Lines Below append an internationalized version of my name to the resume --

function inName(name) {
 name = name.trim().split(" ");
 console.log(name);
 name[1] = name[1].toUpperCase()
 name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
 return name[0] + " " + name[1];
 }
 $('#main').append(internationalizeButton);
 
 // -- Lines Below append projects to resume --
 
projects.display = function() {
  for (current in projects.projects) {
      $('#projects').append(HTMLprojectStart);
		
        var formatttedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[current].title);
		$('#projects').append(formatttedProjectTitle);
		
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[current].dates);
		$('#projects').append(formattedProjectDates);
		
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[current].description);
		$('#projects').append(formattedProjectDescription);
		
		if (projects.projects[current].image.length > 0) {
		  for (images in projects.projects[current].image) {
		    var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[current].image[images]);
		    $('#projects').append(formattedProjectImage);
			}
		}
	}
}
projects.display()

// -- Lines Below append map to my resume --

$('#mapDiv').append(googleMap);





