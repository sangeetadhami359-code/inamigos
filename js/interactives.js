// Interactive Features Module

// ------------------------------
// 1. Data Stores (Blogs & Events)
// ------------------------------
const BLOG_POSTS = {
  'skills-vikas-udaan': {
    title: 'Skill Development: The Step Toward a Better Future 🚀📘',
    date: '09 Jun 2026',
    category: 'Project Vikas',
    views: '1,200',
    cover: 'assets/vikas_skills.jpg',
    content: `
      <p>As you can see, the most important step toward a better future is skill development. Under #ProjectUdaan and #ProjectVikas, we are building practical knowledge, digital skills, and confidence so individuals can become self-reliant and future-ready. Empowering skills today means creating strong, capable leaders for tomorrow. 🚀📘</p>
      <p>InAmigos Foundation operates specialized computer labs and vocational centers to train youth and women. Our programs cover basic office tools, web coding, design concepts, and digital marketing operations, equipping candidates with real workplace skills.</p>
      <p>By investing in digital literacy, we break financial constraints and bridge employment gaps. Let's work together to empower careers and build self-reliant communities.</p>
    `
  },
  'food-feed-seva': {
    title: 'Serving with Compassion: Food Drives Across Communities ❤️🍽️',
    date: '09 Jun 2026',
    category: 'Project Seva',
    views: '1,450',
    cover: 'assets/seva_food_feed.png',
    content: `
      <p>Serving with compassion, spreading smiles, and reaching those who need it the most — under #ProjectSEVA, we are feeding people across different communities and ensuring no one is left behind. Every meal served is not just food, but a moment of dignity, happiness, and care. Together, we are turning kindness into action and making humanity stronger. ❤️🍽️</p>
      <p>InAmigos Foundation holds regular large-scale cooking drives. Our volunteer team cooks nutritious hot meals (like lentils, rice, and vegetables) in clean, high-capacity vessels and distributes them to shelter homes, daily wage laborers, and street families.</p>
      <p>Our goal is to ensure that no one sleeps hungry. With collective support and donations, we continue to expand our serving routes to cover more communities across India.</p>
    `
  },
  'bird-care-jeev': {
    title: 'Caring for the Voiceless: Bird Feeders in Scorching Heat 🐦💧❤️',
    date: '09 Jun 2026',
    category: 'Project Jeev',
    views: '730',
    cover: 'assets/jeev_bird_care.png',
    content: `
      <p>In this scorching summer, let’s care for the voiceless around us — especially birds who struggle to find water and food. A small act like placing water bowls, offering grains, and using a little creativity can save lives. Let’s be their support in this heat and spread kindness beyond words. 🐦💧❤️</p>
      <p>Under #ProjectJEEV, InAmigos Foundation volunteers have initiated a regional bird-welfare drive. We are designing and hanging recycled-bottle bird feeders and fresh water bowls on trees across residential and public park zones in Chhattisgarh and other states.</p>
      <p>This simple, creative step ensures local bird populations survive the extreme summer temperatures. We encourage everyone to place a small pot of water on their balconies and terraces. Together, we can serve with compassion.</p>
    `
  },
  'happiness-bachpanshala': {
    title: 'Small Moments of Joy Create a Big Impact ❤️✨',
    date: '09 Jun 2026',
    category: 'Project Bachpanshala',
    views: '950',
    cover: 'assets/bachpanshala_happiness.png',
    content: `
      <p>Sometimes the smallest moments of happiness mean the most to those who have the least. For children who are working instead of holding books, a simple gift can bring a smile, hope, and a reminder that they deserve a better future. Let’s keep spreading these little joys that create a big impact. ❤️✨</p>
      <p>Under #ProjectBachpanshala, InAmigos Foundation is dedicated to child welfare and literacy. We visit remote slum districts to distribute books, nutritional drinks, educational toys, and host interactive classrooms to inspire street children to embrace learning instead of child labor.</p>
      <p>By providing resources and safety nets, we encourage parents to enroll their kids in primary education. We believe every child deserves a childhood filled with play, learning, and big smiles.</p>
    `
  },
  'plantation-prakriti': {
    title: 'Small Changes Create a Greener Future 🌱🌿',
    date: '09 Jun 2026',
    category: 'Project Prakriti',
    views: '620',
    cover: 'assets/prakriti_plantation.png',
    content: `
      <p>Small changes create a greener future 🌱 Even planting a single sapling at home can bring fresh air, reduce heat, and protect our environment in this scorching summer. You don’t always need big actions — even a small plant in a pot can make a meaningful difference. 🌿☀️</p>
      <p>Under #ProjectPrakriti, InAmigos Foundation encourages home gardening, neighborhood plantation drives, and eco-friendly agriculture practices. During hot summer waves, adding green plants to balconies and terraces significantly reduces ambient temperature and absorbs particulate air pollutants.</p>
      <p>Every sapling counts. We distribute free plant samplings to local schools and households to raise awareness about ecosystem balances. Let's make our neighborhoods greener, one pot at a time!</p>
    `
  },
  'animal-care-jeev': {
    title: 'Saving the Voiceless: Responsibility & Compassion 🐾❤️',
    date: '09 Jun 2026',
    category: 'Project Jeev',
    views: '840',
    cover: 'assets/jeev_animal_care.png',
    content: `
      <p>Saving the voiceless is not just kindness — it is responsibility. Feeding animals, caring for the injured, and standing beside those who cannot ask for help is one of the purest forms of humanity. Every meal, every effort, and every act of compassion can save a life. Together, let’s protect and care for the innocent souls around us.</p>
      <p>Under #ProjectJEEV, InAmigos Foundation is committed to stray animal feeding and medical rescue operations. Our volunteer networks distribute clean water bowls and nutritional feeds daily, while coordinating with local veterinary doctors to address emergency injuries.</p>
      <p>We believe every creature deserves safety and care. Join us in setting up regional street shelters, raising animal awareness, and making cities kinder spaces for street animals.</p>
    `
  },
  'blood-donation-seva': {
    title: 'Saving Lives Begins with a Single Selfless Act 🩸❤️',
    date: '09 Jun 2026',
    category: 'Project Seva',
    views: '1,050',
    cover: 'assets/seva_blood_donation.png',
    content: `
      <p>Under #ProjectSEVA, blood donation is not just about giving blood — it’s about giving hope, strength, and another chance at life. Every drop donated can become someone’s tomorrow. Let’s come together, serve humanity, and make a difference where it matters the most.</p>
      <p>InAmigos Foundation recently organized a blood donation drive to support regional health centers and blood banks. Our network of volunteers stepped up to demonstrate that empathy is active, not passive.</p>
      <p>Every donation counts. By contributing, you support vital emergency operations and help patients undergoing critical treatments. We thank all donors who participated in this drive to unite minds for change.</p>
    `
  },
  'project-vikas': {
    title: 'Project Vikas: Transforming Careers, One Internship at a Time',
    date: '09 Jun 2026',
    category: 'Careers',
    views: '5,487',
    cover: 'assets/blog_vikas_computer.png',
    content: `

      <p>For the past four years, InAmigos Foundation has been committed to empowering young minds through Project Vikas, an initiative that has revolutionized internship opportunities across various domains. With a vision to bridge the gap between education and employability, we have successfully provided 1,000+ internship opportunities, engaged with 100,000+ interns, and onboarded 30,000+ interns into diverse fields.</p>
      <p><b>Diverse Internship Opportunities</b></p>
      <p>Our extensive internship programs cater to multiple career paths, ensuring students gain hands-on experience in their areas of interest. Some of our most sought-after internships include: • Digital Marketing & Social Media Marketing – Practical exposure to brand building and online engagement strategies. • Content Writing & Graphic Designing – Refining creative storytelling and design skills for impactful communication. • HR Internship & Community Management – Learning the art of talent acquisition, employee engagement, and team building. • Volunteering & Virtual Volunteering – Encouraging social responsibility and remote engagement. • Hosting & Event Management – Enhancing leadership and coordination skills through live and virtual events. • Public Relations (PR) & Fundraising & CSR – Building networks and contributing to social change. • Market Research & Operations & Management – Gaining insights into consumer behavior and business operations. • Video Editing & Entrepreneurship & Startup Internship – Shaping future entrepreneurs and creative professionals.</p>
      <p><b>Beyond Internships: Skill Development & Career Guidance</b></p>
      <p>At Project Vikas, we believe in holistic development. Our initiatives go beyond internships, ensuring students are well-equipped with essential career skills. We actively conduct: ✅ Webinars, Seminars, and Live Shows – Featuring industry experts sharing valuable insights. ✅ Talent Shows & Events – Providing platforms for students to showcase their abilities. ✅ Resume Building & Interview Preparation – Enhancing employability through professional guidance.</p>
      <p><b>Reaching Every Corner of India</b></p>
      <p>Our impact extends PAN India, reaching students from diverse backgrounds. Many of our interns have transitioned into full-time careers, securing roles in leading organizations. Join Project Vikas and become part of a movement that is shaping the future workforce. Opportunities await – are you ready to grow with us?</p>
    
    `
  },
  'mission-life': {
    title: 'Mission Life: Great Vision of InAmigos Foundation for a Sustainable Development Future',
    date: '09 Jun 2026',
    category: 'Sustainability',
    views: '2,411',
    cover: 'assets/blog_mission_life_plant.png',
    content: `

      <p><b>INTRODUCTION</b></p>
      <p>Mission Life (Lifestyle For Environment) is an initiative to promote sustainable living and combat climate change. It was introduced by the Honorable Prime Minister of India, Shri Narendra Modi, at the 26th United Nations Climate Change Conference of the Parties (COP26) in Glasgow. This mission aims to unite people’s efforts in protecting the environment by addressing key challenges with collective responsibility.</p>
      <p>In a democratic country like India, diversity is not just a characteristic to cherish; it also plays a crucial role in shaping a sustainable future. Protecting our planet ensures the preservation of our traditions, culture, and values while fulfilling the aspirations and dreams of over 1.25 billion Indians.</p>
      <p>At InAmigos Foundation, we embrace this responsibility by actively encouraging an environmentally conscious lifestyle. Our vision is to reach individuals, inspire change, and drive sustainability efforts at the grassroots level.</p>
      <p><b>THE TRUE PURPOSE AND IMPORTANCE OF MISSION LIFE</b></p>
      <p>Encourages traditional practices to protect the planet sustainably. Promotes afforestation and green initiatives for environmental preservation. Reduces greenhouse gas emissions and supports clean energy initiatives. Fosters a sustainable lifestyle that enhances health and nutrition. Inspires citizens to take responsibility for their environmental impact. Supports sustainable consumption and production through government policies. Addresses climate change issues, ensuring food and water security. Aims to make at least 80% of Indian villages and urban areas environmentally sustainable by 2028. Encourages mindful resource utilization for a peaceful and sustainable future. Aligns with the United Nations Sustainable Development Goals (SDGs) for global environmental transformation.</p>
      <p><b>The Vision of InAmigos Foundation for a Sustainable Future</b></p>
      <p><b>1. SAVE ENERGY</b><br>Energy conservation reduces dependency on fossil fuels and promotes the use of renewable energy. Turn off unnecessary lights and utilize natural lighting. Use energy-efficient appliances like solar panels and fans instead of air conditioners. Prefer walking over driving whenever possible. Wash clothes in cold water and dry them naturally instead of using electric dryers.</p>
      <p><b>2. SAVE WATER</b><br>Water is the most valuable natural resource, essential for life and environmental balance. Collect rainwater for irrigation and household use. Fix leaking taps and use water-efficient appliances. Install low-flush toilets and water-saving showerheads. Avoid water wastage to ensure a sustainable future.</p>
      <p><b>3. SAY NO TO SINGLE-USE PLASTICS</b><br>Plastic pollution is a major environmental threat. Reducing its usage can significantly impact sustainability. Avoid plastic bags, straws, and cutlery; opt for reusable alternatives. Recycle plastic whenever possible. Choose natural fabric clothing over synthetic materials. Use reusable containers instead of plastic wraps.</p>
      <p><b>4. ADOPT SUSTAINABLE FOOD SYSTEMS</b><br>A sustainable food system ensures health and environmental well-being. Consume plant-based, seasonal, and locally sourced foods. Reduce food wastage and promote composting. Grow your own vegetables at home, schools, or workplaces. Support recycling and sustainable agriculture practices.</p>
      <p><b>5. REDUCE WASTE</b><br>Minimizing waste contributes to a cleaner and healthier environment. Carry reusable shopping bags and avoid unnecessary purchases. Buy in bulk and opt for second-hand clothing and furniture. Use refillable containers for food and beverages. Repair broken furniture and recycle materials.</p>
      <p><b>6. ADOPT A HEALTHY LIFESTYLE</b><br>A healthy lifestyle supports sustainability and overall well-being. Consume a balanced diet rich in fruits, vegetables, proteins, and whole grains. Avoid junk food, sugary beverages, and processed foods. Engage in regular physical activities like yoga and exercise. Avoid smoking and alcohol consumption. Practice meditation and self-care for mental and emotional well-being.</p>
      <p><b>7. REDUCE E-WASTE</b><br>Electronic waste poses a significant threat to both human health and the environment. Repair and reuse broken electronics instead of discarding them. Sell or donate used electronics for reuse. Opt for energy-efficient and long-lasting electronic products. Recycle electronic waste responsibly.</p>
      <p><b>A CALL FOR ACTION</b></p>
      <p>We can make a difference by working together to create a world with clean oceans, green landscapes, and pure air. Sustainable development is the key to a prosperous future while preserving our traditional values. This is our opportunity to be a part of the vision and contribute to the mission of protecting the planet.</p>
      <p>By embracing sustainability, we ensure a better world for ourselves and future generations. Let’s unite to build a cleaner, greener, and healthier Earth.</p>
      <p>Save Earth, Save Life!</p>
      <p><i>Written by Sudesna ojha</i></p>
    
    `
  },
  'save-water': {
    title: 'Save Water, Save Life: A Call to Action by InAmigos Foundation',
    date: '09 Jun 2026',
    category: 'Conservation',
    views: '3,552',
    cover: 'assets/blog_save_water.png',
    content: `

      <p><b>Save Water, Save Life: A Call to Action by InAmigos Foundation</b></p>
      <p>Water is the essence of life, a resource so vital yet so undervalued. Despite covering over 70% of the Earth’s surface, less than 1% of water is accessible and safe for human consumption. At InAmigos Foundation, we believe that saving water is not just an environmental necessity but also a responsibility for ensuring a sustainable future.</p>
      <p><b>The Global Water Crisis</b></p>
      <p>The world is facing a water crisis. According to the United Nations, around 2 billion people lack access to safe drinking water, and by 2025, half of the world’s population is expected to live in water-stressed areas. From prolonged droughts to over-extraction of groundwater, the challenges are escalating. But the crisis isn’t just global; it’s personal. Every drop of water wasted today is a drop stolen from future generations.</p>
      <p><b>Why Saving Water Matters</b></p>
      <p>1. Environmental Balance: Conserving water helps maintain the ecological balance, supporting the survival of countless species.<br>
      2. Agricultural Sustainability: Agriculture consumes about 70% of global freshwater. Efficient water use ensures food security.<br>
      3. Energy Conservation: Pumping, treating, and delivering water require energy. Saving water reduces the carbon footprint.<br>
      4. Mitigating Climate Change: Droughts and water scarcity are worsened by climate change. Conserving water helps adapt to these changes.</p>
      <p><b>InAmigos Foundation’s Initiatives</b></p>
      <p>At InAmigos Foundation, we are committed to spreading awareness and driving action for water conservation through several impactful projects:</p>
      <p>1. Rainwater Harvesting Campaigns<br>We actively promote the installation of rainwater harvesting systems in urban and rural areas. These systems capture and store rainwater, reducing dependence on groundwater and ensuring its sustainable use.</p>
      <p>2. Workshops on Water Management<br>Through interactive workshops, we educate communities, schools, and organizations about efficient water usage, leak detection, and adopting water-saving habits.</p>
      <p>3. Tree Plantation Drives<br>Trees play a crucial role in preserving water in the soil and maintaining the water cycle. Our plantation drives across drought-prone regions aim to improve groundwater recharge.</p>
      <p>4. Clean Water Accessibility<br>In partnership with local governments and NGOs, we work to provide clean drinking water to underserved communities, ensuring that access to water is a right, not a privilege.</p>
      <p><b>Simple Ways You Can Save Water</b></p>
      <p>Water conservation starts with you. Here are a few steps to make a difference:<br>
      • Fix Leaks: A dripping faucet can waste over 3,000 liters of water a year.<br>
      • Turn Off Taps: Don’t let the water run while brushing your teeth or washing dish.<br>
      • Use Water-Efficient Fixtures: Opt for low-flow showerheads and dual-flush toilets.<br>
      • Reuse Water: Collect water used for washing vegetables to water plants.<br>
      • Educate Others: Share water-saving tips with friends, family, and colleagues.</p>
      <p><b>A Call to Action</b></p>
      <p>At InAmigos Foundation, we envision a future where everyone has access to clean water and respects its value. But we cannot achieve this alone. It requires collective effort—individuals, communities, and organizations must join hands to make water conservation a way of life.</p>
      <p>Let’s remember, every drop counts. Together, we can ensure that water continues to nourish life on Earth. Join us in our mission to save water and secure a better tomorrow.</p>
      <p>Take the pledge today with InAmigos Foundation to conserve water and spread awareness.</p>
    
    `
  },
  'healthy-lifestyle': {
    title: 'Adopt a Healthy Lifestyle: A Path to Holistic Well-Being',
    date: '09 Jun 2026',
    category: 'Health',
    views: '1,264',
    cover: 'assets/blog_healthy_yoga.png',
    content: `

      <p><b>Introduction</b></p>
      <p>In today’s fast-paced world, adopting a healthy lifestyle is not just an option—it’s a necessity. Sedentary habits, poor dietary choices, and mounting stress have led to an alarming rise in lifestyle-related health issues like obesity, diabetes, and anxiety. Embracing a healthy lifestyle is key to achieving physical well-being, mental clarity, and emotional harmony.</p>
      <p><b>Why Is a Healthy Lifestyle Important?</b></p>
      <p>A healthy lifestyle enhances the overall quality of life and helps prevent chronic diseases. It boosts energy levels, strengthens immunity, and promotes longevity. Beyond physical health, it fosters mental clarity, emotional resilience, and a deeper sense of happiness.</p>
      <p><b>Steps to Adopting a Healthy Lifestyle</b></p>
      <p>Prioritize Nutrition<br>"You are what you eat." This timeless adage emphasizes the importance of a balanced diet. Include fruits, vegetables, whole grains, lean proteins, and healthy fats in your meals. Avoid processed foods, sugary drinks, and excessive salt or sugar. Stay hydrated by drinking plenty of water throughout the day.</p>
      <p>Stay Physically Active<br>Regular exercise is the foundation of a healthy lifestyle. Aim for at least 30 minutes of physical activity daily, such as walking, jogging, yoga, or strength training. Exercise reduces the risk of heart disease, helps maintain a healthy weight, and boosts mood by releasing endorphins.</p>
      <p>Get Enough Sleep<br>Sleep is crucial for overall well-being. Adults need 7-9 hours of quality sleep each night. Good sleep enhances focus, mood, and the body’s ability to repair itself. Create a bedtime routine and optimize your sleep environment for better rest.</p>
      <p>Manage Stress<br>Chronic stress negatively impacts mental and physical health. Practice stress-management techniques such as mindfulness, meditation, or deep breathing. Take time for hobbies, connect with loved ones, and cultivate gratitude to reduce stress.</p>
      <p>Avoid Harmful Habits<br>Stay away from smoking, excessive alcohol consumption, and substance abuse. These habits can cause long-term damage to organs and significantly increase the risk of severe health issues, including cancer.</p>
      <p>Maintain Mental Health<br>Mental well-being is a critical part of a healthy lifestyle. Seek professional help if you feel overwhelmed. Journaling, mindfulness, and setting realistic goals can enhance mental resilience. Build a support system by staying connected with friends and family.</p>
      <p>Stay Consistent<br>Consistency is the key to sustainable change. Make small, gradual adjustments to your routine instead of drastic shifts. Set achievable goals and celebrate milestones to maintain motivation.</p>
      <p><b>Benefits of a Healthy Lifestyle</b></p>
      <p>Adopting a healthy lifestyle offers countless benefits, including: Increased energy and productivity. Reduced risk of chronic diseases such as diabetes, hypertension, and heart disease. Improved mental health with reduced symptoms of anxiety and depression. Enhanced self-esteem and a positive body image.</p>
      <p><b>Conclusion</b></p>
      <p>A healthy lifestyle is not about perfection but balance. It’s a lifelong commitment to making choices that nurture your body, mind, and soul. Start small, stay consistent, and embrace the journey to a healthier, happier you.</p>
      <p>Remember: Your health is your greatest wealth—invest in it wisely. Take the first step today, and let the transformation begin.</p>
      <p><i>Written by Roshni</i></p>
    
    `
  },
  'project-udaan': {
    title: 'Udaan: Where Women Rise, Dreams Soar, and Change Begins',
    date: '09 Jun 2026',
    category: 'Empowerment',
    views: '14,713',
    cover: 'assets/blog_udaan_sunset.png',
    content: `

      <p><b>Introduction</b></p>
      <p>In every corner of India, countless women harbor dreams waiting to take flight. Project Udaan provides that opportunity—a movement of empowerment that has already transformed the lives of over 900 women, enabling them to overcome challenges and rewrite their destinies.</p>
      <p><b>Udaan: Empowering Women, Enriching Communities</b></p>
      <p>At its core, Udaan is more than just individual success. It is about creating ripples of change that uplift families, empower communities, and shape a brighter future. With every woman empowered, we move closer to building a society rooted in equality and opportunity.</p>
      <p><b>What Makes Udaan Unique?</b></p>
      <p>Skill Training That Transforms Lives<br>Women are equipped with marketable skills—from tailoring and handicrafts to digital literacy and entrepreneurship—helping them unlock their potential and achieve financial independence.</p>
      <p>Supporting Women Entrepreneurs<br>Udaan goes beyond skill-building by aiding women in starting and sustaining small businesses, connecting them to local markets, and offering access to microfinance opportunities.</p>
      <p>Holistic Empowerment<br>Through workshops on leadership, women’s rights, and health, Udaan fosters confidence and knowledge, empowering women to take control of their lives.</p>
      <p>Building a Support Network<br>Udaan fosters a sisterhood of empowered women who inspire and support one another, proving that collective strength can lead to incredible achievements.</p>
      <p><b>Our Impact So Far</b></p>
      <p>900+ Women Empowered: Equipped with skills, resources, and confidence to rise above challenges. Families Uplifted: Women becoming breadwinners and role models, improving the lives of their loved ones. Communities Transformed: Women driving change and creating opportunities for others.</p>
      <p><b>Join the Udaan Movement</b></p>
      <p>Udaan is not just a project; it’s a call to action. Together, we can empower more women to break barriers, achieve independence, and inspire change.</p>
      <p>Donate: Help us reach more women with training and resources. Volunteer: Be part of the journey by contributing your time and expertise. Spread the Word: Amplify Udaan’s message and encourage others to join this cause.</p>
      <p><b>Let’s Give More Women the Wings to Soar</b></p>
      <p>When a woman is empowered, her family, community, and future thrive. Together, let’s create a world where every woman’s dream can take flight.</p>
      <p>Udaan: Turning Dreams into Reality, One Woman at a Time.</p>
      <p><i>Written by Rehan Azad</i></p>
    
    `
  },
  'project-jeev': {
    title: 'Project Jeev - In This Life, Save a Life',
    date: '09 Jun 2026',
    category: 'Animal Welfare',
    views: '4,885',
    cover: 'assets/blog_jeev_dog.png',
    content: `

      <p><b>Introduction</b></p>
      <p>The word Jeev in Hindi means animals. Animals have always co-existed with humans, yet over time, humans have often forgotten their responsibility toward these speech-deprived creatures. Just because animals cannot speak and express their needs, they are sometimes taken for granted.</p>
      <p><b>What is Project Jeev?</b></p>
      <p>Project Jeev was initiated with the idea of helping animals who have nowhere to turn. It serves as a ray of hope for animals whose future seemed bleak. Through this project, we aim to help as many stray dogs, cats, cows, and other animals as possible. This includes building makeshift shelters, feeding them, and sometimes even finding them new homes.</p>
      <p><b>Features of the Project</b></p>
      <p>Feeding Strays<br>We make every effort to ensure that no animal in our vicinity sleeps hungry.</p>
      <p>Provide Shelter<br>Our aim is to provide shelter to stray animals so they are protected from adverse weather conditions.</p>
      <p>Provide Emotional Support<br>Just as it's crucial to provide material assistance, it is equally important to offer emotional support. Our volunteers dedicate time to play with and comfort the animals, helping them feel cared for.</p>
      <p><b>How Can You Help?</b></p>
      <p>There are several ways you can contribute to our mission:</p>
      <p>Donations<br>You can donate clothes, materials for shelters, or even money to help us expand our efforts.</p>
      <p>Volunteer<br>Any willing person can connect with our community and dedicate time and effort to help improve the living conditions of these animals.</p>
      <p>Spread Awareness<br>Help spread the word about our cause and motivate other like-minded individuals to join our mission.</p>
      <p>Participate in Fundraising<br>Join our fundraising events to support our initiatives and contribute to the cause with your presence.</p>
      <p>Together, we can make a difference in the lives of these voiceless creatures and ensure that they live with dignity and care.</p>
      <p><i>Written by Rhythm Sharma</i></p>
    
    `
  },
  
  
  };

const EVENT_POSTS = {
  'water-day-2025': {
    title: 'World Water Day 2025',
    date: '22 March 2025',
    category: 'Community',
    cover: 'assets/jeev_bird_care.png',
    desc: 'This event highlights the importance of water conservation and collective action to ensure clean water access for all communities.',
    details: `
      <p>Water is a shared human resource. Join InAmigos Foundation on World Water Day 2025 for a series of community-led cleanup drives, rainwater harvesting workshops, and water testing camps.</p>
      <p><strong>Venue:</strong> Bilaspur Lake front and community center, Chhattisgarh.<br><strong>Time:</strong> 08:00 AM - 01:00 PM IST</p>
      <p>Our volunteers will demonstrate how households can reduce daily consumption by 30% using simple adaptors and conservation habits. We will also distribute free water testing kits to ensure local tube wells are free from chemical contaminations.</p>
    `
  },
  'happiness-day-2025': {
    title: 'International Day of Happiness 2025',
    date: '20 March 2025',
    category: 'Community',
    cover: 'assets/gallery_rainbow_kid.png',
    desc: 'Join us in spreading joy, positivity, and well-being through engaging community activities, arts, and inspiring discussions.',
    details: `
      <p>Happiness increases when shared! InAmigos Foundation is organizing a multi-city joy drive. We will visit shelter homes, government hospitals, and child welfare centers to spread laughter and warmth.</p>
      <p><strong>Activities include:</strong> Magic shows, storytelling circles, distribution of coloring kits, and healthy treats. We also host a mental wellbeing seminar for local teachers and health workers to promote emotional resilience.</p>
      <p>Register as a volunteer to join our groups in Chhattisgarh, Uttar Pradesh, and Delhi NCR.</p>
    `
  },
  'women-science-2025': {
    title: 'International Day of Women and Girls in Science 2025',
    date: '11 February 2025',
    category: 'Education',
    cover: 'assets/vikas_skills.jpg',
    desc: 'Celebrate women in STEM and join our digital literacy workshops to inspire young girls to pursue scientific careers.',
    details: `
      <p>We are breaking barriers! Under Project Vikas and BachpanShala, InAmigos Foundation presents a digital coding boot camp and science experiment lab for young girls in rural government schools.</p>
      <p><strong>Guest Speakers:</strong> Female scientists and IT executives sharing their career paths.<br><strong>Highlights:</strong> Hands-on robotics demonstrations, coding puzzles, and basic biology models.</p>
      <p>Your support helps buy micro-controller kits for classrooms, opening worlds of discovery for future leaders.</p>
    `
  }
};

// ------------------------------
// 2. Event Listeners & Routers
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Gallery Filtering
  initGallery();
  
  // Dynamic Blog Reader Modal
  initBlogReader();
  
  // Dynamic Event Reader Modal
  initEventReader();
  
  // Volunteer Modal & Form
  initVolunteerForm();
  
  // Donation Tier Interactive Calculator
  initDonationCalculator();
  
  // Contact Form Submission
  initContactForm();
});

// ------------------------------
// 3. Gallery Filters & Lightbox
// ------------------------------
function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length === 0 || galleryItems.length === 0) return;
  
  // Setup filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });
  
  // Setup Lightbox Modal
  const items = document.querySelectorAll('.gallery-item-link');
  let activeIndex = 0;
  let visibleItems = [];
  
  // Modal overlay element
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.className = 'modal-overlay';
  lightboxOverlay.id = 'lightboxOverlay';
  lightboxOverlay.innerHTML = `
    <button class="modal-close" id="lightboxClose"><i class="fas fa-times"></i></button>
    <button class="lightbox-nav lightbox-prev" id="lightboxPrev"><i class="fas fa-chevron-left"></i></button>
    <div class="lightbox-container">
      <img src="" class="lightbox-img" id="lightboxImg">
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
    <button class="lightbox-nav lightbox-next" id="lightboxNext"><i class="fas fa-chevron-right"></i></button>
  `;
  document.body.appendChild(lightboxOverlay);
  
  const imgElement = document.getElementById('lightboxImg');
  const captionElement = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  
  const openLightbox = (index) => {
    // Collect currently visible images
    visibleItems = Array.from(galleryItems)
      .filter(item => item.style.display !== 'none')
      .map(item => item.querySelector('.gallery-item-link'));
      
    activeIndex = visibleItems.indexOf(items[index]);
    if (activeIndex === -1) activeIndex = 0;
    
    updateLightbox();
    lightboxOverlay.classList.add('active');
  };
  
  const updateLightbox = () => {
    if (visibleItems.length === 0) return;
    const targetLink = visibleItems[activeIndex];
    imgElement.src = targetLink.getAttribute('href');
    captionElement.innerText = targetLink.getAttribute('data-title');
  };
  
  items.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });
  
  closeBtn.addEventListener('click', () => lightboxOverlay.classList.remove('active'));
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) lightboxOverlay.classList.remove('active');
  });
  
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    activeIndex = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
  });
  
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    activeIndex = (activeIndex + 1) % visibleItems.length;
    updateLightbox();
  });
}

// ------------------------------
// 4. Dynamic Blog Modal & Comments
// ------------------------------
function initBlogReader() {
  const readMoreButtons = document.querySelectorAll('.blog-read-more');
  if (readMoreButtons.length === 0) return;
  
  const blogOverlay = document.createElement('div');
  blogOverlay.className = 'modal-overlay';
  blogOverlay.id = 'blogOverlay';
  blogOverlay.innerHTML = `
    <div class="modal-container">
      <button class="modal-close" id="blogClose"><i class="fas fa-times"></i></button>
      <div class="modal-blog-header">
        <span class="section-badge" id="modalBlogBadge"></span>
        <h2 id="modalBlogTitle" style="margin-top: 10px;"></h2>
        <div class="blog-meta" style="margin-top: 15px;" id="modalBlogMeta"></div>
      </div>
      <div class="modal-blog-body">
        <img src="" class="modal-blog-cover" id="modalBlogCover">
        <div id="modalBlogContent"></div>
        
        <!-- Interactive comment system -->
        <div class="comments-section">
          <h3>Leave a Comment</h3>
          <form id="commentForm" style="margin-top: 15px;">
            <div class="form-group">
              <input type="text" class="form-control" id="commentAuthor" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <textarea class="form-control" id="commentText" placeholder="Share your thoughts..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Post Comment</button>
          </form>
          
          <div style="margin-top: 30px;">
            <h4>Comments (<span id="commentCount">0</span>)</h4>
            <ul class="comments-list" id="commentsList"></ul>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(blogOverlay);
  
  const closeBtn = document.getElementById('blogClose');
  let activeBlogId = '';
  
  const openBlog = (blogId) => {
    const post = BLOG_POSTS[blogId];
    if (!post) return;
    
    activeBlogId = blogId;
    
    document.getElementById('modalBlogBadge').innerText = post.category;
    document.getElementById('modalBlogTitle').innerText = post.title;
    document.getElementById('modalBlogCover').src = post.cover;
    document.getElementById('modalBlogContent').innerHTML = post.content;
    document.getElementById('modalBlogMeta').innerHTML = `
      <span><i class="far fa-calendar"></i> ${post.date}</span>
      
    `;
    
    // Load comments
    renderComments(blogId);
    
    blogOverlay.classList.add('active');
  };
  
  readMoreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const blogId = btn.getAttribute('data-id');
      openBlog(blogId);
    });
  });
  
  closeBtn.addEventListener('click', () => blogOverlay.classList.remove('active'));
  blogOverlay.addEventListener('click', (e) => {
    if (e.target === blogOverlay) blogOverlay.classList.remove('active');
  });
  
  // Handle comment submit
  const commentForm = document.getElementById('commentForm');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('commentAuthor').value.trim();
    const text = document.getElementById('commentText').value.trim();
    
    if (!author || !text) return;
    
    const comments = JSON.parse(localStorage.getItem(`comments_${activeBlogId}`)) || [];
    const newComment = {
      author,
      text,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    
    comments.push(newComment);
    localStorage.setItem(`comments_${activeBlogId}`, JSON.stringify(comments));
    
    commentForm.reset();
    renderComments(activeBlogId);
    showToast('Comment posted successfully!', 'success');
  });
}

function renderComments(blogId) {
  const list = document.getElementById('commentsList');
  const countSpan = document.getElementById('commentCount');
  
  const comments = JSON.parse(localStorage.getItem(`comments_${blogId}`)) || [];
  countSpan.innerText = comments.length;
  
  list.innerHTML = '';
  
  if (comments.length === 0) {
    list.innerHTML = `<li style="color: var(--text-muted); font-size: 0.95rem;">No comments yet. Be the first to share your thoughts!</li>`;
    return;
  }
  
  // Render backward so newest is first
  comments.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.className = 'comment-card';
    li.innerHTML = `
      <div class="comment-meta">
        <span class="comment-author">${escapeHTML(c.author)}</span>
        <span class="comment-date">${c.date}</span>
      </div>
      <p class="comment-text">${escapeHTML(c.text)}</p>
    `;
    list.appendChild(li);
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// ------------------------------
// 5. Dynamic Event Reader & RSVP
// ------------------------------
function initEventReader() {
  const readMoreButtons = document.querySelectorAll('.event-read-more');
  if (readMoreButtons.length === 0) return;
  
  const eventOverlay = document.createElement('div');
  eventOverlay.className = 'modal-overlay';
  eventOverlay.id = 'eventOverlay';
  eventOverlay.innerHTML = `
    <div class="modal-container">
      <button class="modal-close" id="eventClose"><i class="fas fa-times"></i></button>
      <div class="modal-blog-header">
        <span class="section-badge" id="modalEventBadge"></span>
        <h2 id="modalEventTitle" style="margin-top: 10px;"></h2>
        <div class="blog-meta" style="margin-top: 15px;" id="modalEventMeta"></div>
      </div>
      <div class="modal-blog-body">
        <img src="" class="modal-blog-cover" id="modalEventCover">
        <div id="modalEventContent" style="margin-bottom: 30px;"></div>
        
        <div style="background-color: var(--bg-main); padding: 30px; border-radius: var(--radius-md); border: 1px solid var(--border);">
          <h3>RSVP / Register for Event</h3>
          <p style="margin-bottom: 20px; font-size: 0.95rem;">Register now to get updates, reminders, and coordinate with the local volunteer coordinator.</p>
          
          <form id="eventRsvpForm">
            <div class="form-group">
              <input type="text" class="form-control" id="rsvpName" placeholder="Full Name" required>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="rsvpEmail" placeholder="Email Address" required>
            </div>
            <div class="form-group">
              <input type="tel" class="form-control" id="rsvpPhone" placeholder="Phone Number" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit RSVP</button>
          </form>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(eventOverlay);
  
  const closeBtn = document.getElementById('eventClose');
  let activeEventId = '';
  
  const openEvent = (eventId) => {
    const ev = EVENT_POSTS[eventId];
    if (!ev) return;
    
    activeEventId = eventId;
    
    document.getElementById('modalEventBadge').innerText = ev.category;
    document.getElementById('modalEventTitle').innerText = ev.title;
    document.getElementById('modalEventCover').src = ev.cover;
    document.getElementById('modalEventContent').innerHTML = ev.details;
    document.getElementById('modalEventMeta').innerHTML = `
      <span><i class="far fa-calendar"></i> Date: ${ev.date}</span>
    `;
    
    eventOverlay.classList.add('active');
  };
  
  readMoreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const eventId = btn.getAttribute('data-id');
      openEvent(eventId);
    });
  });
  
  closeBtn.addEventListener('click', () => eventOverlay.classList.remove('active'));
  eventOverlay.addEventListener('click', (e) => {
    if (e.target === eventOverlay) eventOverlay.classList.remove('active');
  });
  
  const rsvpForm = document.getElementById('eventRsvpForm');
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast(`RSVP registered for ${EVENT_POSTS[activeEventId].title}! Check your email for details.`, 'success');
    rsvpForm.reset();
    eventOverlay.classList.remove('active');
  });
}

// ------------------------------
// 6. Volunteer Join Modal
// ------------------------------

function initVolunteerForm() {
  const volunteerBtn = document.getElementById('btnVolunteerJoin');
  const volunteerOverlay = document.getElementById('volunteerOverlay');
  
  if (volunteerBtn && volunteerOverlay) {
    const closeBtn = volunteerOverlay.querySelector('.modal-close');
    volunteerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      volunteerOverlay.classList.add('active');
    });
    closeBtn.addEventListener('click', () => volunteerOverlay.classList.remove('active'));
    volunteerOverlay.addEventListener('click', (e) => {
      if (e.target === volunteerOverlay) volunteerOverlay.classList.remove('active');
    });
  }

  const handleVolunteerSubmit = (formId, nameId, emailId, phoneId) => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById(nameId).value.trim();
        const email = document.getElementById(emailId).value.trim();
        const phone = document.getElementById(phoneId).value.trim();
        const selectEl = form.querySelector('select');
        const area = selectEl ? selectEl.options[selectEl.selectedIndex].text : 'General';
        
        const payload = {
          _subject: 'New Volunteer Application from ' + name,
          Name: name,
          Email: email,
          Phone: phone,
          'Area of Interest': area
        };

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        fetch("https://formsubmit.co/ajax/sangeetadhami359@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          showToast('Thank you! Your volunteer application has been submitted.', 'success');
          form.reset();
          if (volunteerOverlay) volunteerOverlay.classList.remove('active');
        })
        .catch(error => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          showToast('There was an error submitting your application. Please try again.', 'error');
        });
        
        return; // prevent the old showToast from running immediately

        showToast('Thank you! Your volunteer application has been submitted.', 'success');
        form.reset();
        if (volunteerOverlay) volunteerOverlay.classList.remove('active');
      });
    }
  };

  handleVolunteerSubmit('volunteerForm', 'vName', 'vEmail', 'vPhone');
  handleVolunteerSubmit('volunteerPageForm', 'vpName', 'vpEmail', 'vpPhone');
}


// ------------------------------
// 7. Donation Calculator Logic
// ------------------------------
function initDonationCalculator() {
  const donationCalc = document.querySelector('.donation-calc');
  if (!donationCalc) return;
  
  const tierBtns = document.querySelectorAll('.tier-btn');
  const customInput = document.getElementById('donationCustom');
  const displayImpact = document.getElementById('donationImpactText');
  const donateSubmit = document.getElementById('btnDonateSubmit');
  
  const impacts = {
    1000: 'Provide hot nutritious meals and warm clothing to 5 underprivileged children (Project SEVA).',
    2500: 'Fund basic school education & digital literacy materials for 2 children for a whole month (Project BachpanShala).',
    5000: 'Support street animal rescues, medicines, and feed 30 stray animals for a month (Project Jeev).',
    10000: 'Empower a rural woman with tailoring skills training and provide her first sewing machine (Project Udaan).',
    20000: 'Fund the planting & maintenance of 200 trees in conservation zones (Project Prakriti).',
    50000: 'Sponsor a full skill-building & job operations internship certification for 5 candidates (Project Vikas).'
  };
  
  const updateImpact = (amount) => {
    let text = 'Support our diverse development projects across India.';
    
    // Find closest lower or equal tier impact
    const amounts = Object.keys(impacts).map(Number).sort((a,b) => b-a);
    for (const val of amounts) {
      if (amount >= val) {
        text = impacts[val];
        break;
      }
    }
    
    displayImpact.innerText = text;
  };
  
  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const val = btn.getAttribute('data-value');
      customInput.value = val;
      updateImpact(parseInt(val));
    });
  });
  
  customInput.addEventListener('input', () => {
    const val = parseInt(customInput.value) || 0;
    
    // Remove active state from preset buttons unless matches exactly
    tierBtns.forEach(b => {
      if (parseInt(b.getAttribute('data-value')) === val) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    
    updateImpact(val);
  });
  
  donateSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = customInput.value || 0;
    if (amount <= 0) {
      showToast('Please enter a valid donation amount.', 'error');
      return;
    }
    
    // Trigger popup with payment options
    const dummyPaymentOverlay = document.createElement('div');
    dummyPaymentOverlay.className = 'modal-overlay active';
    dummyPaymentOverlay.innerHTML = `
      <div class="modal-container" style="max-width: 500px; padding: 40px; text-align: center;">
        <button class="modal-close" id="paymentClose"><i class="fas fa-times"></i></button>
        <i class="fas fa-heart" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
        <h2>Thank You for Supporting Us!</h2>
        <p style="margin: 15px 0;">You are donating: <strong style="font-size: 1.5rem; color: var(--primary);">₹${parseInt(amount).toLocaleString()}</strong></p>
        
        <div style="background-color: var(--bg-main); border: 2px dashed var(--primary); padding: 20px; border-radius: var(--radius-md); margin-bottom: 20px;">
          <h4 style="margin-bottom: 10px;">Scan QR to Pay via UPI</h4>
          <div style="width: 150px; height: 150px; background-color: #cbd5e1; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; border-radius: var(--radius-sm);">
            [ DUMMY UPI QR ]
          </div>
        </div>
        
        <div style="text-align: left; margin-bottom: 20px;">
          <h4 style="margin-bottom: 10px;">Bank Transfer Details</h4>
          <p style="font-size: 0.9rem; margin-bottom: 5px;"><strong>Bank Name:</strong> State Bank of India</p>
          <p style="font-size: 0.9rem; margin-bottom: 5px;"><strong>Account Name:</strong> INAMIGOS FOUNDATION</p>
          <p style="font-size: 0.9rem; margin-bottom: 5px;"><strong>Account No:</strong> 123456789012 (Dummy)</p>
          <p style="font-size: 0.9rem; margin-bottom: 5px;"><strong>IFSC Code:</strong> SBIN0001234</p>
        </div>
        
        <button class="btn btn-primary" id="paymentDone" style="width: 100%;">I Have Paid</button>
      </div>
    `;
    document.body.appendChild(dummyPaymentOverlay);
    
    const pClose = document.getElementById('paymentClose');
    const pDone = document.getElementById('paymentDone');
    
    const removePayment = () => dummyPaymentOverlay.remove();
    pClose.addEventListener('click', removePayment);
    pDone.addEventListener('click', () => {
      showToast('Thank you! We will verify the transaction once received.', 'success');
      removePayment();
    });
  });
}

// ------------------------------
// 8. Contact Form Submissions
// ------------------------------
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const payload = {
      _subject: 'New Contact Form Submission from ' + name,
      Name: name,
      Email: email,
      Message: message
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    fetch("https://formsubmit.co/ajax/sangeetadhami359@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      showToast('Thank you, ' + name + '! Your message has been sent successfully.', 'success');
      contactForm.reset();
    })
    .catch(error => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      showToast('There was an error sending your message. Please try again later.', 'error');
    });
    
    return; // prevent the old showToast from running immediately
    showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
    contactForm.reset();
  });
}
