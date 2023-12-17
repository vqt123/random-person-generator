
const races = ['Caucasian', 'Hispanic', 'African', 'MiddleEastern', 'Asian'];

const raceToCountries =
{
    "Caucasian": [
      "Russia",
      "Greece",
      "Spain",
      "Germany",
      "Poland",
      "Italy",
      "France",
      "Ireland",
      "Czech Republic",
      "Slovenia",
      "Sweden",
      "Norway",
      "Bulgaria",
      "Latvia",
      "Hungary",
      "Serbia",
      "Netherlands",
      "Belgium",
      "Ukraine",
      "Portugal",
      "Romania"
    ],
    "Hispanic": [
      "Brazil",
      "Mexico",
      "Spain" // Note: Spain is also listed under Caucasian
    ],
    "African": [
      "Nigeria",
      "Ethiopia",
      "Kenya",
      "Egypt" // Note: Egypt is also listed under Middle Eastern
    ],
    "MiddleEastern": [
      "Saudi Arabia",
      "Iran",
      "Turkey",
      "Egypt" // Note: Egypt is also listed under African
    ],
    "Asian": [
      "India",
      "Pakistan",
      "Bangladesh",
      "Sri Lanka",
      "China",
      "Japan",
      "South Korea",
      "Indonesia",
      "Philippines",
      "Thailand"
    ],
  }

  const countryToLastNames = 
  {
    "Saudi Arabia": ["Al Saud", "Al Sheikh", "Al Amri", "Al Harbi", "Al Qahtani"],
    "Japan": ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Nakamura", "Kobayashi", "Yamamoto", "Nakajima"],
    "Russia": ["Ivanov", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Volkov", "Sokolov", "Lebedev"],
    "Nigeria": ["Adegoke", "Chukwu", "Okafor", "Balogun", "Eze", "Abubakar", "Ahmed", "Aliyu", "Musa", "Isa"],
    "Greece": ["Papadopoulos", "Vasileiou", "Nikolaidis", "Georgiou", "Demetriou", "Papadakis", "Antoniou", "Christodoulou", "Panagiotopoulos"],
    "Spain": ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez"],
    "Vietnam": ["Nguyen", "Tran", "Le", "Pham", "Huynh", "Hoang", "Phan", "Vu", "Dang", "Bui"],
    "Germany": ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz"],
    "India": ["Singh", "Kumar", "Sharma", "Gupta", "Patel", "Mehta", "Jain", "Shah", "Malhotra", "Kapoor"],
    "Turkey": ["Yılmaz", "Kaya", "Demir", "Şahin", "Çelik", "Öztürk", "Aydemir", "Özdemir", "Arslan", "Doğan"],
    "Portugal": ["Silva", "Santos", "Ferreira", "Pereira", "Oliveira", "Costa", "Rodrigues", "Martins", "Jesus", "Sousa"],
    "Ireland": ["Murphy", "Kelly", "O'Sullivan", "Walsh", "Smith", "O'Brien", "Byrne", "Ryan", "O'Connor", "O'Neill"],
    "Brazil": ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"],
    "France": ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau"],
    "Italy": ["Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Marino", "Greco"],
    "Iran": ["Mohammadi", "Hosseini", "Ahmadi", "Kazemi", "Najafi", "Rahmani", "Rezai", "Karimi", "Ghasemi"],
    "Poland": ["Nowak", "Kowalski", "Wiśniewski", "Dąbrowski", "Lewandowski", "Wójcik", "Kamiński", "Zieliński", "Szymański"],
    "England": ["Smith", "Jones", "Taylor", "Brown", "Wilson", "Evans", "Thomas", "Roberts", "Johnson", "Lewis"],
    "Chinese": ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou"],
    "Persian": ["Kazemi", "Mohammadi", "Hosseini", "Ahmadi", "Rezai", "Khamenei", "Rouhani", "Jafari", "Rahimi"],
    "Welsh": ["Jones", "Williams", "Davies", "Evans", "Thomas", "Roberts", "Lewis", "Hughes", "Morgan", "Griffiths"],
    "Ukraine": ["Shevchenko", "Kovalenko", "Bondarenko", "Tkachenko", "Kovalchuk", "Kravchenko", "Oliynyk", "Polishchuk"],
    "South Korea": ["Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Cho", "Yoon", "Jang", "Lim"],
    "Czech Republic": ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec"],
    "Slovenia": ["Novak", "Horvat", "Kovačič", "Zupančič", "Kralj", "Vidmar", "Golob", "Pavlič", "Košir", "Petek"],
    "Romania": ["Popescu", "Ionescu", "Dumitrescu", "Stan", "Stoica", "Dima", "Marin", "Nistor", "Manea", "Florea"],
    "Sweden": ["Andersson", "Johansson", "Karlsson", "Nilsson", "Eriksson", "Larsson", "Olsson", "Persson", "Svensson", "Gustafsson"],
    "Norway": ["Hansen", "Johansen", "Olsen", "Larsen", "Andersen", "Pedersen", "Nilsen", "Kristiansen", "Jensen", "Karlsen"],
    "Bulgaria": ["Ivanov", "Petrov", "Georgiev", "Dimitrov", "Kolev", "Vasilev", "Nikolov", "Popov", "Stoyanov", "Todorov"],
    "Egypt": ["Mohamed", "Ali", "Mahmoud", "Hassan", "Ahmed", "Sayed", "Abdullah", "Ibrahim", "Osman", "Gamal"],
    "Ethiopia": ["Kebede", "Teshome", "Gebre", "Assefa", "Bekele", "Tadesse", "Mekonnen", "Alemu", "Tesfaye", "Worku"],
    "Kenya": ["Wanjiku", "Mwangi", "Kamau", "Njoroge", "Kariuki", "Ochieng", "Kipchoge", "Kimani", "Mugo", "Omondi"],
    "Latvia": ["Bērziņš", "Kalniņš", "Ozoliņš", "Liepiņš", "Jansons", "Vītols", "Krūmiņš", "Pētersons", "Balodis", "Dzērve"],
    "Hungary": ["Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kis", "Farkas", "Balog", "Papp"],
    "Serbia": ["Jovanović", "Petrović", "Nikolić", "Marković", "Đorđević", "Stanković", "Popović", "Milošević", "Ilić", "Stevanović"],
    "Netherlands": ["De Jong", "Jansen", "De Vries", "Van den Berg", "Van Dijk", "Bakker", "Visser", "Smit", "Meijer", "De Boer"],
    "Mexico": ["Hernández", "García", "Martínez", "López", "González", "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Torres"],
    "Belgium": ["Peeters", "Janssens", "Maes", "Jacobs", "Mertens", "Willems", "Claes", "Goossens", "Wouters", "De Smet"],
    "Israel": ["Cohen", "Levi", "Mizrachi", "Peretz", "Friedman", "Goldberg", "Katz", "Shapira", "Hassan", "Weiss"],
    "Pakistan": ["Khan", "Ahmed", "Ali", "Hussain", "Sheikh", "Malik", "Rahman", "Qureshi", "Butt", "Iqbal"],
    "Bangladesh": ["Rahman", "Islam", "Ahmed", "Begum", "Chowdhury", "Hossain", "Miah", "Akter", "Khatun", "Sultana"],
    "Sri Lanka": ["Perera", "Fernando", "Silva", "De Silva", "Jayasinghe", "Gunawardena", "Bandara", "Ratnayake", "Wickramasinghe", "Rajapaksa"],
    "Indonesia": ["Santoso", "Wijaya", "Saputra", "Hartono", "Putra", "Sari", "Kurniawan", "Susanto", "Setiawan", "Anggraini"],
    "Philippines": ["Santos", "Reyes", "Cruz", "Bautista", "Ocampo", "Garcia", "Mendoza", "Torres", "Martinez", "Flores"],
    "Thailand": ["Srisai", "Jitpraphai", "Kulap", "Chantarasiri", "Thitimajshima", "Wongsawat", "Prachachart", "Sukhaseum", "Thongchai", "Chirathivat"],
    "Israel": ["Cohen", "Levi", "Mizrachi", "Peretz", "Friedman", "Goldberg", "Katz", "Shapira", "Hassan", "Weiss"],
    "Wales": ["Jones", "Williams", "Davies", "Evans", "Thomas", "Roberts", "Lewis", "Hughes", "Morgan", "Griffiths"],
    "China": ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou"],
    "Persian": ["Kazemi", "Mohammadi", "Hosseini", "Ahmadi", "Rezai", "Khamenei", "Rouhani", "Jafari", "Rahimi", "Ghasemi"],
    "England": ["Smith", "Jones", "Taylor", "Brown", "Wilson", "Evans", "Thomas", "Roberts", "Johnson", "Lewis"]
  }
  

  const countryToFemaleNames =
  {
    "Saudi Arabia": ["Aisha", "Fatma", "Hafsah", "Isra", "Malika", "Naima", "Rania", "Sana", "Umaima", "Wafa", "Zahira", "Amira", "Samira", "Layla", "Noura"],
    "Japan": ["Akari", "Hana", "Hanako", "Haruka", "Hina", "Mayumi", "Mio", "Reina", "Sakura", "Yumi", "Yukiko", "Aiko", "Asuka", "Keiko", "Mariko"],
    "Russia": ["Alina", "Anastasia", "Darya", "Elena", "Ksenia", "Lara", "Nadia", "Natalia", "Tamara", "Yekaterina", "Yulia", "Irina", "Svetlana", "Olga", "Tatiana"],
    "Nigeria": ["Amara", "Ada", "Chidinma", "Makeda", "Zainab", "Fatimah", "Aminah", "Ifeoma", "Ngozi", "Oluchi"],
    "Greece": ["Anastasia", "Elena", "Maria", "Eleni", "Sofia", "Dimitra", "Katerina", "Vasiliki", "Irina", "Georgia"],
    "Spain": ["Andrea", "Ines", "Leticia", "Marisol", "Raquel", "Carmen", "Sofia", "Lucia", "Marta", "Ana"],
    "Vietnam": ["Anh", "Linh", "Phuong", "Thuy", "Huyen", "Mai", "Trang", "Ngoc", "Hoa", "Bich"],
    "Germany": ["Anna", "Brigitte", "Jasmin", "Sophie", "Emma", "Hannah", "Lena", "Mia", "Sarah", "Julia"],
    "India": ["Aparna", "Anaya", "Deepika", "Geetanjali", "Padma", "Pooja", "Priyanka", "Shruti", "Neha", "Sonal", "Ritu", "Preeti", "Anjali", "Meena", "Lata"],
    "Turkey": ["Aylin", "Cansu", "Dilara", "Ebru", "Ece", "Elif", "Esin", "Fadime", "Gul", "Lale", "Lina", "Pinar", "Sibel", "Tugba", "Yasemin", "Zeynep", "Hatice", "Sevgi", "Emine", "Yildiz"],
    "Portugal": ["Beatriz", "Carolina", "Ana", "Maria", "Leonor", "Margarida", "Clara", "Inês", "Joana", "Catarina"],
    "Ireland": ["Caitlin", "Aisling", "Fionnuala", "Niamh", "Siobhan", "Eileen", "Bridget", "Maeve", "Aoife", "Clodagh"],
    "Brazil": ["Camila", "Daiane", "Jolina", "Leticia", "Maricel", "Yara", "Ana", "Fernanda", "Gabriela", "Julia"],
    "France": ["Chloé", "Elodie", "Giselle", "Manon", "Vivienne", "Amelie", "Sophie", "Juliette", "Camille", "Audrey"],
    "Italy": ["Daniela", "Elisabetta", "Valeria", "Bianca", "Chiara", "Giovanna", "Alessia", "Giulia", "Sara", "Martina"],
    "Iran": ["Darya", "Samira", "Zahra", "Nasrin", "Fateme", "Mina", "Leila", "Sara", "Mahin", "Roya"],
    "Poland": ["Emilia", "Maja", "Ula", "Wiktoria", "Anna", "Katarzyna", "Agnieszka", "Barbara", "Ewa", "Magdalena"],
    "England": ["Emma", "Dahlia", "Olivia", "Amelia", "Isabella", "Sophia", "Ava", "Charlotte", "Mia", "Harper"],
    "Chinese": ["Mei", "Qi", "Jia", "Ling", "Hui", "Xue", "Fang", "Ying", "Li", "Hong"],
    "Persian": ["Zara", "Zahra", "Parisa", "Nasrin", "Farah", "Laleh", "Shirin", "Roxana", "Mahnaz", "Simin"],
    "Welsh": ["Nia", "Megan", "Seren", "Carys", "Ffion", "Angharad", "Bethan", "Catrin", "Eleri", "Gwen"],
    "Ukraine": ["Olena", "Kateryna", "Nataliya", "Anastasiya", "Yuliya", "Oksana", "Tetiana", "Iryna", "Larysa", "Maryna"],
    "South Korea": ["Minji", "Soo-yeon", "Ji-eun", "Hye-jin", "Seo-yeon", "Yoon-ah", "Eun-kyung", "Ji-young", "Hyun-jung", "Seung-hee"],
    "Czech Republic": ["Jana", "Eva", "Anna", "Lucie", "Tereza", "Klára", "Veronika", "Hana", "Markéta", "Pavla"],
    "Slovenia": ["Kaja", "Eva", "Ana", "Lara", "Sara", "Maja", "Nika", "Tina", "Petra", "Lina"],
    "Romania": ["Gabriela", "Ana", "Maria", "Elena", "Ioana", "Andreea", "Oana", "Ruxandra", "Cristina", "Diana"],
    "Sweden": ["Greta", "Emma", "Elsa", "Astrid", "Alice", "Maja", "Linnea", "Ella", "Lilly", "Wilma"],
    "Norway": ["Ida", "Emma", "Sofia", "Nora", "Olivia", "Sara", "Frida", "Maja", "Anna", "Ingrid"],
    "Bulgaria": ["Sofia", "Maria", "Ivana", "Viktoria", "Nikol", "Gabriela", "Simona", "Yana", "Diana", "Elena"],
    "Egypt": ["Nefertari", "Fatma", "Aisha", "Sara", "Mariam", "Nadia", "Yasmin", "Rania", "Heba", "Mona"],
    "Ethiopia": ["Makeda", "Abeba", "Zewditu", "Selam", "Frehiwot", "Tigist", "Yordanos", "Hana", "Birtukan", "Meseret"],
    "Kenya": ["Thandiwe", "Auma", "Akinyi", "Wanjiku", "Njeri", "Makena", "Nyambura", "Wanjiru", "Kendi", "Atieno"],
    "Latvia": ["Ieva", "Linda", "Kristine", "Elina", "Anita", "Baiba", "Inga", "Jelena", "Liena", "Sandra"],
    "Hungary": ["Ilona", "Eszter", "Anna", "Zsófia", "Katalin", "Orsolya", "Réka", "Ágnes", "Dóra", "Fanni"],
    "Serbia": ["Jovana", "Marija", "Ana", "Milica", "Ivana", "Jelena", "Katarina", "Sofija", "Maja", "Aleksandra"],
    "Netherlands": ["Vanessa", "Emma", "Julia", "Sophie", "Anna", "Mila", "Tess", "Sara", "Eva", "Zoë"],
    "Mexico": ["Ximena", "Sofia", "Maria", "Valentina", "Camila", "Victoria", "Fernanda", "Isabella", "Daniela", "Gabriela"],
    "Belgium": ["Nadine", "Emma", "Louise", "Marie", "Elise", "Charlotte", "Laura", "Julie", "Sara", "Elena"],
    "Israel": ["Lea", "Liora", "Noa", "Tamar", "Yael", "Shira", "Maya", "Avigail", "Hila", "Adi"],
    "Pakistan": ["Ayesha", "Fatima", "Hira", "Mahira", "Sana", "Samina", "Fariha", "Kiran", "Rabia", "Sidra"],
    "Bangladesh": ["Farzana", "Nusrat", "Roksana", "Sharmin", "Tasnim", "Anika", "Lamia", "Rahima", "Sabina", "Tania"],
    "Sri Lanka": ["Anuradha", "Dilhani", "Jayanthi", "Kusum", "Sandhya", "Nimali", "Sashikala", "Shanthi", "Tharushi", "Udari"],
    "Indonesia": ["Ayu", "Dian", "Intan", "Nia", "Rini", "Siti", "Yanti", "Anisa", "Bunga", "Citra"],
    "Philippines": ["Analyn", "Jolina", "Ligaya", "Luningning", "Maricel", "Mayumi", "Angelica", "Cristina", "Elena", "Josie"],
    "Thailand": ["Arunee", "Chompoo", "Kanokwan", "Mali", "Nok", "Siriporn", "Thanyarat", "Aom", "Duangkamol", "Kanya"]
  }

  const countryToMaleNames =
  {
    "Saudi Arabia": ["Mohammed", "Ahmed", "Abdullah", "Fahad", "Khalid", "Yousef", "Saud", "Faisal", "Turki", "Nasser"],
    "Japan": ["Hiroshi", "Takashi", "Kenji", "Kazuo", "Shinji", "Yuki", "Daiki", "Masato", "Kaito", "Ryota"],
    "Russia": ["Alexei", "Dmitry", "Ivan", "Mikhail", "Sergei", "Vladimir", "Nikolai", "Andrei", "Yuri", "Pavel"],
    "Nigeria": ["Chinua", "Ade", "Obi", "Ikechukwu", "Emeka", "Olu", "Kunle", "Tunde", "Chukwuma", "Yemi"],
    "Greece": ["Nikos", "Yiannis", "Georgios", "Dimitris", "Kostas", "Panos", "Vasilis", "Stavros", "Christos", "Thanos"],
    "Spain": ["Carlos", "Miguel", "José", "Antonio", "Javier", "Francisco", "David", "Juan", "Manuel", "Luis"],
    "Vietnam": ["Minh", "Phuc", "Duc", "Anh", "Quan", "Trung", "Tuan", "Huy", "Kien", "Nghia"],
    "Germany": ["Lukas", "Maximilian", "Felix", "Paul", "Jonas", "Tobias", "Leon", "Niklas", "Jakob", "Tim"],
    "India": ["Rahul", "Vikas", "Anil", "Amit", "Rajesh", "Suresh", "Deepak", "Sunil", "Manoj", "Ravi"],
    "Turkey": ["Mehmet", "Ahmet", "Mustafa", "Ali", "Hakan", "Murat", "Emre", "Okan", "Yusuf", "Kaan"],
    "Portugal": ["João", "Pedro", "Tiago", "Ricardo", "André", "Filipe", "Miguel", "Rui", "Gonçalo", "Nuno"],
    "Ireland": ["Conor", "Sean", "Patrick", "Ciaran", "Liam", "Eoin", "Niall", "Brendan", "Fergus", "Aidan"],
    "Brazil": ["João", "Pedro", "Mateus", "Lucas", "Gabriel", "Rafael", "Guilherme", "Gustavo", "Felipe", "Marcelo"],
    "France": ["Louis", "Lucas", "Jules", "Gabriel", "Arthur", "Raphael", "Paul", "Alexandre", "Maxime", "Victor"],
    "Italy": ["Luca", "Matteo", "Alessandro", "Andrea", "Giovanni", "Francesco", "Marco", "Riccardo", "Lorenzo", "Antonio"],
    "Iran": ["Reza", "Mohammad", "Ali", "Amir", "Mehdi", "Saeed", "Hossein", "Ahmad", "Majid", "Javad"],
    "Poland": ["Jakub", "Michał", "Piotr", "Krzysztof", "Marek", "Tomasz", "Wojciech", "Adam", "Paweł", "Jan"],
    "England": ["Oliver", "Harry", "George", "Jack", "Noah", "Charlie", "Jacob", "Alfie", "Freddie", "Oscar"],
    "Chinese": ["Wei", "Jun", "Feng", "Hao", "Chen", "Jian", "Liang", "Lei", "Yong", "Ping"],
    "Persian": ["Reza", "Amir", "Mohsen", "Ali", "Hossein", "Javad", "Majid", "Saeed", "Farhad", "Kourosh"],
    "Welsh": ["Gareth", "Dylan", "Rhys", "Owen", "Llewellyn", "Glyn", "Ieuan", "Bryn", "Gethin", "Dai"],
    "Ukraine": ["Oleksandr", "Dmytro", "Andriy", "Viktor", "Serhiy", "Ivan", "Yuriy", "Oleksiy", "Vladyslav", "Mykola"],
    "South Korea": ["Jae-sung", "Min-ho", "Seung-hyun", "Ji-hoon", "Hyun-woo", "Dong-hyun", "Sung-min", "Joon-ho", "Tae-hyun", "Yong-hwa"],
    "Czech Republic": ["Jan", "Petr", "Jiří", "Pavel", "Martin", "Tomáš", "Lukáš", "Marek", "Michal", "David"],
    "Slovenia": ["Luka", "Matej", "Jan", "Miha", "Marko", "Simon", "Tilen", "Rok", "Klemen", "Urban"],
    "Romania": ["Ion", "Vasile", "Gheorghe", "Adrian", "Alexandru", "Mihai", "Florin", "Dan", "Dumitru", "Nicolae"],
    "Sweden": ["Erik", "Lars", "Karl", "Anders", "Per", "Johan", "Gustav", "Olof", "Fredrik", "Magnus"],
    "Norway": ["Ole", "Lars", "Kjetil", "Anders", "Per", "Morten", "Erik", "Svein", "Jan", "Arne"],
    "Bulgaria": ["Ivan", "Georgi", "Dimitar", "Nikolay", "Petar", "Vasil", "Krasimir", "Plamen", "Todor", "Stoyan"],
    "Egypt": ["Mohamed", "Ahmed", "Mahmoud", "Hassan", "Ali", "Khaled", "Abdul", "Sayed", "Hussein", "Ibrahim"],
    "Ethiopia": ["Tewodros", "Abebe", "Yohannes", "Zelalem", "Fikru", "Mekonnen", "Girma", "Tamrat", "Dereje", "Yonas"],
    "Kenya": ["John", "Samuel", "Peter", "Joseph", "David", "Daniel", "James", "Paul", "Simon", "Michael"],
    "Latvia": ["Jānis", "Andris", "Kristaps", "Mārtiņš", "Edgars", "Raimonds", "Dāvis", "Uldis", "Artūrs", "Roberts"],
    "Hungary": ["István", "József", "László", "Gábor", "Attila", "Péter", "Zoltán", "Tamás", "Norbert", "Csaba"],
    "Serbia": ["Nikola", "Marko", "Aleksandar", "Jovan", "Milan", "Stefan", "Ivan", "Luka", "Nenad", "Dragan"],
    "Netherlands": ["Daan", "Sem", "Luuk", "Levi", "Bram", "Finn", "Noah", "Jesse", "Mees", "Milan"],
    "Mexico": ["José", "Carlos", "Juan", "Miguel", "Luis", "Francisco", "Jorge", "Ricardo", "Eduardo", "Fernando"],
    "Belgium": ["Lucas", "Louis", "Liam", "Noah", "Adam", "Arthur", "Victor", "Jules", "Ethan", "Gabriel"],
    "Israel": ["David", "Moshe", "Yosef", "Ariel", "Daniel", "Avraham", "Yehuda", "Itzhak", "Meir", "Shimon"],
    "Pakistan": ["Muhammad", "Ali", "Ahmed", "Hasan", "Hussein", "Omar", "Imran", "Faisal", "Bilal", "Usman"],
    "Bangladesh": ["Mohammad", "Rahman", "Hassan", "Khan", "Ahmed", "Islam", "Hossain", "Sikder", "Rana", "Chowdhury"],
    "Sri Lanka": ["Aravinda", "Kamal", "Nimal", "Ranjith", "Saman", "Upul", "Vijaya", "Chaminda", "Dinesh", "Mahesh"],
    "Indonesia": ["Budi", "Agus", "Andi", "Dwi", "Eko", "Fajar", "Gede", "Hari", "Iwan", "Joko"],
    "Philippines": ["Jose", "Juan", "Miguel", "Carlos", "Antonio", "Luis", "Ramon", "Fernando", "Ricardo", "Eduardo"],
    "Thailand": ["Somchai", "Anan", "Sarawut", "Sakchai", "Apichat", "Manop", "Wichai", "Surasak", "Narong", "Bunma"]
  }
  


/**
 * Object mapping races to available hair colors.
 * @type {Object.<string, string[]>}
 */
const raceToHairColors = {
    'Caucasian': ['Black', 'Brown', 'Blonde', 'Red', 'White'],
    'Hispanic': ['Black', 'Brown', 'Blonde', 'Red'],
    'African': ['Black', 'Brown'],
    'MiddleEastern': ['Black', 'Brown'],
    'Asian': ['Black', 'Brown'],
};

const genders = ['man','woman'];

// export
export default  {
    races,
    raceToCountries,
    countryToFemaleNames,
    countryToMaleNames,
    countryToLastNames,
    raceToHairColors,
    genders
};
