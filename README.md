# SmartKart - E-Commerce Platform

SmartKart is a full-stack e-commerce platform built with modern web technologies. It provides a complete shopping experience with features like product browsing, cart management, user authentication, and order processing.

## Features

### User Features
- User registration and authentication
- Product browsing and searching
- Category and brand filtering
- Product details view
- Shopping cart management
- Order placement and tracking
- User profile management
- Product reviews and ratings
- Address management

### Admin Features
- Product management (CRUD operations)
- Order management
- User management
- Category and brand management
- Sales tracking

## Tech Stack

### Frontend
- React.js
- Redux Toolkit (State Management)
- React Router (Routing)
- Tailwind CSS (Styling)
- Radix UI (UI Components)
- Axios (HTTP Client)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)
- Cloudinary (Image Storage)
- PayPal SDK (Payment Processing)

## Project Structure

```
smartkart/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store and slices
│   │   ├── config/        # Configuration files
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
│
└── server/                # Backend Node.js application
    ├── controllers/       # Route controllers
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    ├── helpers/          # Utility functions
    └── middleware/       # Custom middleware
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/smartkart.git
cd smartkart
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
Create a `.env` file in the server directory with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/smartkart
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
```

4. Start the development servers
```bash
# Start the backend server
cd server
npm run dev

# Start the frontend development server
cd ../client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Endpoints

### Authentication
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout

### Products
- GET /api/shop/products/get - Get all products
- GET /api/shop/products/get/:id - Get product details
- POST /api/admin/products/add - Add new product
- PUT /api/admin/products/edit/:id - Edit product
- DELETE /api/admin/products/delete/:id - Delete product

### Cart
- POST /api/shop/cart/add - Add to cart
- GET /api/shop/cart/get/:userId - Get cart items
- PUT /api/shop/cart/update - Update cart quantity
- DELETE /api/shop/cart/delete/:userId/:productId - Remove from cart

### Orders
- POST /api/shop/orders/create - Create order
- GET /api/shop/orders/get/:userId - Get user orders
- GET /api/admin/orders/get - Get all orders
- PUT /api/admin/orders/update/:id - Update order status

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) 