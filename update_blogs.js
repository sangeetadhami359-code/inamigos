const fs = require('fs');

const blogsToUpdate = {
  'project-vikas': {
    title: 'Project Vikas: Transforming Careers, One Internship at a Time',
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
  }
};

let js = fs.readFileSync('js/interactives.js', 'utf8');

for (const key in blogsToUpdate) {
  // We locate the property definition for each blog
  const regexContent = new RegExp("('" + key + "'|\\b" + key + "\\b)\\s*:\\s*\\{\\s*title:\\s*'.*?',\\s*date:\\s*'.*?',\\s*category:\\s*'.*?',\\s*cover:\\s*'.*?',\\s*content:\\s*`[\\s\\S]*?`\\s*\\}", 'g');
  
  // Wait, let's just replace the individual fields
  js = js.replace(new RegExp("('" + key + "'|\\b" + key + "\\b)\\s*:\\s*\\{\\s*title:\\s*'(.*?)'"), "$1: {\\n    title: '" + blogsToUpdate[key].title.replace(/'/g, "\\'") + "'");
  js = js.replace(new RegExp("('" + key + "'|\\b" + key + "\\b)\\s*:\\s*\\{([\\s\\S]*?)cover:\\s*'.*?'"), "$1: {$2cover: '" + blogsToUpdate[key].cover + "'");
  
  // Replace content
  js = js.replace(new RegExp("('" + key + "'|\\b" + key + "\\b)\\s*:\\s*\\{([\\s\\S]*?)content:\\s*`[\\s\\S]*?`\\s*\\}"), "$1: {$2content: `\\n" + blogsToUpdate[key].content + "\\n    `\\n  }");
}

fs.writeFileSync('js/interactives.js', js);
console.log("Updated interactives.js");

let html = fs.readFileSync('blog.html', 'utf8');

// Update blog cards in blog.html
for (const key in blogsToUpdate) {
  // Find the anchor with data-id="key" and its corresponding image and title
  const regex = new RegExp('<div class="card-blog">([\\s\\S]*?)<a href="#" class="blog-read-more" data-id="' + key + '">', 'g');
  html = html.replace(regex, (match, inner) => {
    let replaced = inner.replace(/<img src="assets\/.*?"/, '<img src="' + blogsToUpdate[key].cover + '"');
    replaced = replaced.replace(/<h3 class="blog-title">.*?<\/h3>/, '<h3 class="blog-title">' + blogsToUpdate[key].title + '</h3>');
    // Also remove the views span if it wasn't already removed properly, or it's gone
    return '<div class="card-blog">' + replaced + '<a href="#" class="blog-read-more" data-id="' + key + '">';
  });
}

fs.writeFileSync('blog.html', html);
console.log("Updated blog.html");
