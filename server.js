const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname+'/public/menu.html');
});

app.post('/submit',(req,res)=>{
    const { itemName, name, phone, quantity } = req.body;

const prices ={

    oatmeal: 3.99,
    Hashbrowns: 2.50,
    CerealCups: 0.99,
    Parfait: 2.99,
    FrenchToast: 7.99,
    PORTancakes: 6.99,
    Omelette: 6.99,
    BreakSandwich: 8.99,

    Fries: 3.99,
    Salad: 4.99,
    Breadsticks: 3.99,
    Wings: 5.99,
    Burger: 6.99,
    Pizza: 3.99,
    Tacos: 4.99,
    FriedChicken: 5.99,
    Sandwich: 5.99,

    Pasta: 7.99,
    Tilapia: 9.99,
    OrangeChicken: 7.99,
    ChickenSalad: 8.99,
    Pho: 10.99,
    Quesadilla: 6.99,
};

const totalPrice = prices[itemName] * quantity;

res.send(`Thank you, ${name}! Your order (${quantity} ${itemName}) has been received. Total: $${totalPrice.toFixed(2)}. We will contact you at ${phone} for confirmation.`);
});

app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}');
});