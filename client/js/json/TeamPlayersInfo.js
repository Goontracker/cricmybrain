define([
	"jquery",
	"underscore"
], function($, _) {
		var team_players = {
			MI: {  
				team : "Mumbai Indians",
				teamId : "MI",
				players : [
					{"name" : "Jasprit Bumrah", "type" : "bowler"},
					{"name" : "Shreyas Gopal", "type" : "bowler"},
					{"name" : "Kishore Kamath", "type" : "bowler"},
					{"name" : "Mitchell McClenaghan", "type" : "bowler"},
					{"name" : "Tim Southee", "type" : "bowler"},
					{"name" : "Vinay Kumar", "type" : "bowler"},
					{"name" : "Marchant de Lange", "type" : "bowler"},
					{"name" : "Harbhajan Singh", "type" : "bowler"},
					{"name" : "Lasith Malinga", "type" : "bowler"},
					{"name" : "Nathu Singh", "type" : "bowler"},
					{"name" : "Suchith", "type" : "bowler"},
					{"name" : "Hardik Pandya", "type" : "all"},
					{"name" : "Corey Anderson", "type" : "all"},
					{"name" : "Krunal Pandya", "type" : "all"},
					{"name" : "Kieron Pollard", "type" : "all"},
					{"name" : "Rohit Sharma", "type" : "batsman"},
					{"name" : "Unmukt Chand", "type" : "batsman"},
					{"name" : "Deepak Punia", "type" : "batsman"},
					{"name" : "Ambati Rayudu", "type" : "batsman"},
					{"name" : "Martin Guptill", "type" : "batsman"},
					{"name" : "Siddhesh Lad", "type" : "batsman"},
					{"name" : "Nitish Rana", "type" : "batsman"},
					{"name" : "Jitesh Sharma", "type" : "batsman"},
					{"name" : "Akshay Wakhare", "type" : "batsman"},
					{"name" : "Parthiv Patel", "type" : "wk"},
					{"name" : "Jos Buttler", "type" : "wk"}
				]
			},
			KKR: {
				team : "Kolkata Knight Riders",
				teamId : "KKR",
				players : [
					{"name" : "John Hastings", "type" : "bowler"},
					{"name" : "Kuldeep Yadav", "type" : "bowler"},
					{"name" : "Jaydev Unadkat", "type" : "bowler"},
					{"name" : "Piyush Chawla", "type" : "bowler"},
					{"name" : "Brad Hogg", "type" : "bowler"},
					{"name" : "Morne Morkel", "type" : "bowler"},
					{"name" : "Sunil Narine", "type" : "bowler"},
					{"name" : "Umesh Yadav", "type" : "bowler"},
					{"name" : "Jason Holder", "type" : "all"},
					{"name" : "Yusuf Pathan", "type" : "all"},
					{"name" : "Andre Russell", "type" : "all"},
					{"name" : "Shakib Al Hasan", "type" : "all"},
					{"name" : "Gautam Gambhir", "type" : "batsman"},
					{"name" : "Manan Sharma", "type" : "batsman"},
					{"name" : "Colin Munro", "type" : "batsman"},
					{"name" : "Manish Pandey", "type" : "batsman"},
					{"name" : "Ankit Rajpoot", "type" : "batsman"},
					{"name" : "Rajagopal Sathish", "type" : "batsman"},
					{"name" : "Suryakumar Yadav", "type" : "batsman"},
					{"name" : "Chris Lynn", "type" : "batsman"},
					{"name" : "Robin Uthappa", "type" : "wk"},
					{"name" : "Sheldon Jackson", "type" : "wk"}
				]
			},
			KXIP: {
				team : "Kings XI Punjab",
				teamId : "KXIP",
				players : [
					{"name" : "Anureet Singh", "type" : "bowler"},
					{"name" : "Mitchell Johnson", "type" : "bowler"},
					{"name" : "Mohit Sharma", "type" : "bowler"},
					{"name" : "Kyle Abbott", "type" : "bowler"},
					{"name" : "Cariappa", "type" : "bowler"},
					{"name" : "Sandeep Sharma", "type" : "bowler"},
					{"name" : "Shardul Thakur", "type" : "bowler"},
					{"name" : "Farhaan Behardien", "type" : "all"},
					{"name" : "Rishi Dhawan", "type" : "all"},
					{"name" : "Glenn Maxwell", "type" : "all"},
					{"name" : "Axar Patel", "type" : "all"},
					{"name" : "Pardeep Sahu", "type" : "all"},
					{"name" : "Swapnil Singh", "type" : "all"},
					{"name" : "Marcus Stoinis", "type" : "all"},
					{"name" : "David Miller", "type" : "batsman"},
					{"name" : "Murali Vijay", "type" : "batsman"},
					{"name" : "Armaan Jaffer", "type" : "batsman"},
					{"name" : "Gurkeerat Singh Mann", "type" : "batsman"},
					{"name" : "Shaun Marsh", "type" : "batsman"},
					{"name" : "Nikhil Naik", "type" : "batsman"},
					{"name" : "Manan Vohra", "type" : "batsman"},
					{"name" : "Wriddhiman Saha", "type" : "wk"}
				]
			},
			SH: {
				team : "Sunrisers Hyderabad",
				teamId : "SH",
				players : [
					{"name" : "Ricky Bhui", "type" : "bowler"},
					{"name" : "Trent Boult", "type" : "bowler"},
					{"name" : "Abhimanyu Mithun", "type" : "bowler"},
					{"name" : "Siddarth Kaul", "type" : "bowler"},
					{"name" : "Mustafizur Rahman", "type" : "bowler"},
					{"name" : "Ashish Nehra", "type" : "bowler"},
					{"name" : "Bipul Sharma", "type" : "bowler"},
					{"name" : "Bhuvneshwar Kumar", "type" : "bowler"},
					{"name" : "Barinder Sran", "type" : "bowler"},
					{"name" : "Moises Henriques", "type" : "all"},
					{"name" : "Karn Sharma", "type" : "all"},
					{"name" : "Ashish Reddy", "type" : "all"},
					{"name" : "Ben Cutting", "type" : "all"},
					{"name" : "Vijay Shankar", "type" : "all"},
					{"name" : "Shikhar Dhawan", "type" : "batsman"},
					{"name" : "Tirumalsetti Suman", "type" : "batsman"},
					{"name" : "David Warner", "type" : "batsman"},
					{"name" : "Yuvraj Singh", "type" : "batsman"},
					{"name" : "Eoin Morgan", "type" : "batsman"},
					{"name" : "Kane Williamson", "type" : "batsman"},
					{"name" : "Deepak Hooda", "type" : "batsman"},
					{"name" : "Ricky Bhui", "type" : "batsman"},
					{"name" : "Naman Ojha", "type" : "wk"},
					{"name" : "Aditya Tare", "type" : "wk"}
				]
			},
			GL: {
				team : "Gujarat Lions",
				teamId : "GL",
				players : [
					{"name" : "Dhawal Kulkarni", "type" : "bowler"},
					{"name" : "Pravin Tambe", "type" : "bowler"},
					{"name" : "Sarabjit Ladda", "type" : "bowler"},
					{"name" : "Amit Mishra", "type" : "bowler"},
					{"name" : "Shadab Jakati", "type" : "bowler"},
					{"name" : "Shivil Kaushik", "type" : "bowler"},
					{"name" : "Praveen Kumar", "type" : "bowler"},
					{"name" : "Pradeep Sangwan", "type" : "bowler"},
					{"name" : "Dale Steyn", "type" : "bowler"},
					{"name" : "Andrew Tye", "type" : "bowler"},
					{"name" : "Dwayne Bravo", "type" : "all"},
					{"name" : "Ravindra Jadeja", "type" : "all"},
					{"name" : "James Faulkner", "type" : "all"},
					{"name" : "Suresh Raina", "type" : "batsman"},
					{"name" : "Akshdeep Nath", "type" : "batsman"},
					{"name" : "Aaron Finch", "type" : "batsman"},
					{"name" : "Brendon McCullum", "type" : "batsman"},
					{"name" : "Jaydev Shah", "type" : "batsman"},
					{"name" : "Dwayne Smith", "type" : "batsman"},
					{"name" : "Paras Dogra", "type" : "batsman"},
					{"name" : "Ishan Kishan", "type" : "batsman"},
					{"name" : "Umang Sharma", "type" : "batsman"},
					{"name" : "Amit Mishra", "type" : "batsman"},
					{"name" : "Eklavya Dwivedi", "type" : "wk"},
					{"name" : "Dinesh Karthik", "type" : "wk"}
				]	
			},
			RPS: {
				team : "Rising Pune Supergiants",
				teamId : "RPS",
				players : [
					{"name" : "Ravichandran Ashwin", "type" : "bowler"},
					{"name" : "Ishant Sharma", "type" : "bowler"},
					{"name" : "Adam Zampa", "type" : "bowler"},
					{"name" : "Ankit Sharma", "type" : "bowler"},
					{"name" : "Murugan Ashwin", "type" : "bowler"},
					{"name" : "Scott Boland", "type" : "bowler"},
					{"name" : "Ashok Dinda", "type" : "bowler"},
					{"name" : "Ishwar Pandey", "type" : "bowler"},
					{"name" : "RP Singh", "type" : "bowler"},
					{"name" : "Baba Aparajith", "type" : "all"},
					{"name" : "Rajat Bhatia", "type" : "all"},
					{"name" : "Irfan Pathan", "type" : "all"},
					{"name" : "Mitchell Marsh", "type" : "all"},
					{"name" : "Thisara Perera", "type" : "all"},
					{"name" : "Albie Morkel", "type" : "all"},
					{"name" : "Deepak Chahar", "type" : "batsman"},
					{"name" : "Faf du Plessis", "type" : "batsman"},
					{"name" : "Jaskaran Singh", "type" : "batsman"},
					{"name" : "Kevin Pietersen", "type" : "batsman"},
					{"name" : "Steven Smith", "type" : "batsman"},
					{"name" : "Ankush Bains", "type" : "batsman"},
					{"name" : "Peter Handscomb", "type" : "batsman"},
					{"name" : "Ajinkya Rahane", "type" : "batsman"},
					{"name" : "Saurabh Tiwary", "type" : "batsman"},
					{"name" : "MS Dhoni", "type" : "wk"}
				]
			},
			RCB: {
				team : "Royal Challengers Bangalore",
				teamId : "RCB",
				players : [
					{"name" : "Abu Nechim", "type" : "bowler"},
					{"name" : "Samuel Badree", "type" : "bowler"},
					{"name" : "Yuzvendra Chahal", "type" : "bowler"},
					{"name" : "Vikas Tokas", "type" : "bowler"},
					{"name" : "Varun Aaron", "type" : "bowler"},
					{"name" : "Sreenath Aravind", "type" : "bowler"},
					{"name" : "Iqbal Abdulla", "type" : "bowler"},
					{"name" : "Vikramjeet Malik", "type" : "bowler"},
					{"name" : "Adam Milne", "type" : "bowler"},
					{"name" : "Harshal Patel", "type" : "bowler"},
					{"name" : "Kane Richardson", "type" : "bowler"},
					{"name" : "Praveen Dubey", "type" : "all"},
					{"name" : "David Wiese", "type" : "all"},
					{"name" : "Stuart Binny", "type" : "all"},
					{"name" : "Shane Watson", "type" : "all"},
					{"name" : "Virat Kohli", "type" : "batsman"},
					{"name" : "Travis Head", "type" : "batsman"},
					{"name" : "Sarfaraz Khan", "type" : "batsman"},
					{"name" : "Mandeep Singh", "type" : "batsman"},
					{"name" : "Lokesh Rahul", "type" : "batsman"},
					{"name" : "Sachin Baby", "type" : "batsman"},
					{"name" : "AB de Villiers", "type" : "batsman"},
					{"name" : "Chris Gayle", "type" : "batsman"},
					{"name" : "Akshay Karnewar", "type" : "batsman"},
					{"name" : "Kedar Jadhav", "type" : "wk"}
				]
			},
			DD: {
				team : "Delhi Daredevils",
				teamId : "DD",
				players : [
					{"name" : "Zaheer Khan", "type" : "bowler"},
					{"name" : "Khaleel Ahmed", "type" : "bowler"},
					{"name" : "Mohammed Shami", "type" : "bowler"},
					{"name" : "Shahbaz Nadeem", "type" : "bowler"},
					{"name" : "Joel Paris", "type" : "bowler"},
					{"name" : "Jayant Yadav", "type" : "bowler"},
					{"name" : "Nathan Coulter-Nile", "type" : "bowler"},
					{"name" : "Imran Tahir", "type" : "bowler"},
					{"name" : "Mahipal Lomror", "type" : "bowler"},
					{"name" : "Chris Morris", "type" : "bowler"},
					{"name" : "Pratyush Singh", "type" : "bowler"},
					{"name" : "Pawan Suyal", "type" : "bowler"},
					{"name" : "Amit Mishra", "type" : "bowler"},
					{"name" : "Carlos Brathwaite", "type" : "all"},
					{"name" : "Chama Milind", "type" : "all"},
					{"name" : "Pawan Negi", "type" : "all"},
					{"name" : "Jean-Paul Duminy", "type" : "all"},
					{"name" : "Akhil Herwadkar", "type" : "batsman"},
					{"name" : "Shreyas Iyer", "type" : "batsman"},
					{"name" : "Mayank Agarwal", "type" : "batsman"},
					{"name" : "Sam Billings", "type" : "batsman"},
					{"name" : "Karun Nair", "type" : "batsman"},
					{"name" : "Quinton de Kock", "type" : "wk"},
					{"name" : "Sanju Samson", "type" : "wk"},
					{"name" : "Rishabh Pant", "type" : "wk"}
				]
			}
		};

		var getTeamName = function(teamId) {
			return team_players[teamId].team;
		};

		var getPlayers = function(teamId) {
			return team_players[teamId].players;
		};

		var getAllTeamName = function() {
			var allTeams = {};
			_.each(team_players, function(team) {
				allTeams[team.teamId] = team.team;
			});
			return allTeams;
		}

		return {
			getTeamName: getTeamName,
			getPlayers: getPlayers,
			getAllTeamName: getAllTeamName
		};

	} 
);
