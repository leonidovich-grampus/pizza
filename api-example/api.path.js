export const api = {
    core: {
        url: 'www.example.com/api/'
    },
    routes: [
        {
            'name': 'All products',
            'path': 'products',
            'input': 'none',
            'output': {
                'status': 200,
                'example': 'get.products.json'
            }

        }
    ]
}

// Товары


// GET:
const ALL_PRODUCTS = "www.example.com/api/products/";
// output get.products.json

const SINGLE_PRODUCT = "www.example.com/api/products/:id";

// output get.single.product.json

const ALL_CATS = "www.example.com/api/cats";
// output get.cats.json

const ALL_PARAMS = "www.example.com/api/params";
// output get.params.json



// ЗАКАЗЫ //

const ORDERS = "www.example.com/api/orders/";
// GET: output : [ {get.order.json} , ... ] || ERROR

// POST: input : post.new-order.json  | output : orderID || ERROR

// PUT: input  {put.order.json} | output: 200 || ERROR

const ORDER = "www.example.com/api/orders/:id";

// GET: output : {get.order.json}

// DELETE: output 200 || ERROR


// ЮЗЕРЫ //

const USERS = "www.example.com/api/users/"

// GET: output : [ {get.users.json} , ... ] || ERROR

// POST: input : post.user.json  | output : userID || ERROR

// PUT: input  {put.users.json} | output: 200 || ERROR

const USER = "www.example.com/api/users/:id"

// GET: output : {get.users.json}|| ERROR
// DELETE: output 200 || ERROR  





