# Currency-to-Country Search App

Welcome to the Currency-to-Country Search App! This React application allows users to search for countries based on their currency using the restcountries.com API. The app features a user-friendly interface, Chakra UI components, and debounced search functionality for a smoother experience.

## Technologies Used

- **React:** The application is built using the React library, enabling efficient and modular UI development.
- **Chakra UI:** Chakra UI provides accessible and customizable components, enhancing the visual appeal of the app.
- **Axios:** Asynchronous HTTP requests to the restcountries.com API are made using Axios to fetch country data based on the entered currency.
- **use-debounce:** The use-debounce library is employed to debounce the search input, reducing the number of API requests for an optimized user experience.

## Getting Started

### Clone the Repository:

```bash
git clone https://github.com/your-username/currency-to-country-search.git
cd currency-to-country-search
```

### Install Dependencies:

```bash
npm install
```

### Run the Application:

```bash
npm run dev
```

This will start the development server, and you can view the app by navigating to http://localhost:3000 in your browser.

## Usage

1. Enter a currency code (e.g., INR, EUR) in the search box.
2. The app will display a list of countries that use the specified currency.
3. Explore country details such as name, capital, and flag.

## Features

- **Debounced Search:** The application uses the use-debounce library to debounce the search input, optimizing the search functionality.
- **Loading Indicator:** A loading indicator is displayed while fetching data from the API to provide feedback to the user.
- **Responsive Design:** The UI is designed to be responsive, ensuring a consistent experience across various devices.

## Screenshots

Insert screenshots of the application in action.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Special thanks to restcountries.com for providing the API used in this project.
The Chakra UI library for making the UI development process more enjoyable.
