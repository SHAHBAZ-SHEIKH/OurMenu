const foodMenu = [
    {
        url:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken-500x375.jpg",
        name:"Biryani",
        price:300,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Lunch"
    },

    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFGdE_Pq7MZpr0Sh_17LjPPZzmq9hRT14JQ&s",
        name:"karahi",
        price:1000,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Lunch"
    },

    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUX5e__qAAU6nVluZpBXbI0aEdd_x0tBE0w&s",
        name:"Mandi Platter",
        price:1200,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Lunch"
    },

    {
        url:"https://imagevars.gulfnews.com/2023/05/01/Tandoori-chicken_187d79b132b_large.jpg",
        name:"Tikka",
        price:400,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Lunch"
        
    },
    {
        url:"https://media-cdn.tripadvisor.com/media/photo-s/0e/75/8d/ec/nihari-and-dal-puri.jpg",
        name:"Nihari Puri",
        price:200,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"BreakFast"
        
    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3iQiEDp6EMsz6OMG17N_j3jHz2cZL1LmJQ&s",
        name:"Halwa Puri",
        price:150,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"BreakFast"
        
    },
    {
        url:"https://peekncooksa.blob.core.windows.net/index-recipe/spicy_egg_paratha.jpg",
        name:"Anda Paratha",
        price:100,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"BreakFast"
        
    },
    {
        url:"https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes-Cheese-and-Bread.jpg",
        name:"Bread",
        price:100,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"BreakFast"
        
    },

    {
        url:"https://recipethis.com/wp-content/uploads/3-Ingredient-Oreo-Cookies-Cream-Milkshake.jpg",
        name:"Oreo Shakes",
        price:300,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Shakes"
        
    },

    {
        url:"https://magicalbutter.com/cdn/shop/articles/vkkaghljdtrftxdlzhxa.jpg?v=1692647211",
        name:"Milk Shakes",
        price:300,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Shakes"
        
    },
    {
        url:"https://i.ytimg.com/vi/VimM8n0QNr8/maxresdefault.jpg",
        name:"Faluda",
        price:200,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Shakes"
        
    },
    {
        url:"https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-10/46_0.jpg",
        name:"Chocolate Shakes",
        price:250,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores eos corporis voluptatum omnis cupiditate odit maiores ea perspiciatis. Quisquam quae tempora.",
        category:"Shakes"

    }
    




]

// const mainContainer = document.querySelector("#merge")

// foodMenu.forEach((foodItem) =>{
//     mainContainer.innerHTML +=`<div class="col-12 col-sm-12 col-md-6 col-lg-6">
//                     <div class="card-div">
//                         <div class="image">
//                             <img src=${foodItem.url} alt="">
//                         </div>
    
//                         <div class="category">
//                             <div class="price">
//                                 <h4>${foodItem.name}</h4>
//                                 <p>${foodItem.price}</p>
//                                 <div class="line"></div>
//                             </div>
//                             <div class="description">
//                                 <p>${foodItem.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
// })


function categoryHandler(category){
    const mainContainer = document.querySelector("#merge")
    mainContainer.innerHTML =''
    if(category == "All"){
        foodMenu.forEach((foodItem) =>{
            mainContainer.innerHTML +=`<div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="card-div">
                                <div class="image">
                                    <img src=${foodItem.url} alt="">
                                </div>
            
                                <div class="category">
                                    <div class="price">
                                        <h4>${foodItem.name}</h4>
                                        <p>${foodItem.price}</p>
                                        <div class="line"></div>
                                    </div>
                                    <div class="description">
                                        <p>${foodItem.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`
        })

    }
    else{
        foodMenu.filter((foodItem) =>foodItem.category ==category).forEach((foodItem) =>{
        
            mainContainer.innerHTML +=`<div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card-div">
                            <div class="image">
                                <img src=${foodItem.url} alt="">
                            </div>
        
                            <div class="category">
                                <div class="price">
                                    <h4>${foodItem.name}</h4>
                                    <p>${foodItem.price}</p>
                                    <div class="line"></div>
                                </div>
                                <div class="description">
                                    <p>${foodItem.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
    
        })

    }

    
    
}