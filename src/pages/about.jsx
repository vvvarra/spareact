function About() {
    return (
        <div>
            <h1>Hello from About page</h1>
            <h3>Welcome to Simply Recipes!</h3>
            <div className="recall">
                
                <p>At Simply Recipes, we’re passionate about good food and the joy it brings to our lives. Our mission is to make cooking accessible, enjoyable, and delicious for everyone. Whether you’re a seasoned chef or a beginner in the kitchen, we’ve got something for you.</p>
                <img src="/img/food.jpg"></img>
            </div>
            <div className="recwhat">
                <h3>What We Offer</h3>
                <p> <b>Recipe Database:</b> Explore our extensive collection of mouthwatering recipes. From classic comfort foods to exotic cuisines, we’ve got it all. Use our search and category filters to find exactly what you’re craving.</p>
                <p> <b>Category Filters:</b> Looking for vegetarian options? Or perhaps you’re in the mood for seafood? Our category filters allow you to narrow down your search and discover recipes tailored to your preferences.</p>
                <p> <b>Detailed Recipes:</b> Each recipe on our site comes with step-by-step instructions, ingredient lists, and cooking tips. Whether you’re baking a cake or whipping up a savory curry, we’ve got you covered.</p>
                <p> <b>Cooking Videos:</b> Sometimes it’s easier to learn by watching. That’s why we provide video tutorials for many of our recipes. Follow along with our chefs as they demonstrate techniques and share their culinary secrets.</p>
            </div>

            <div className="reccont">
                <h3>Contact Us</h3>
                <p> Have a question, feedback, or just want to say hello? Reach out to us via our <a href="/contact">Contact page.</a>  </p>
                <p>We’d love to hear from you! Whether you’re here to find a weeknight dinner recipe or explore new culinary horizons, Simply Recipes is your go-to destination. Happy cooking!</p>
  

            </div>
            
            

        </div>

    ) 
}

export { About };
