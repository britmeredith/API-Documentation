# Content Sentiment Analyzer API Documentation

This project is an example of interactive API documentation for a Content Sentiment Analyzer.

It demonstrates several key features of high-quality API documentation, including:
- Complex asynchronous workflows
- Batch processing
- Detailed request/response schemas

The documentation is generated from an OpenAPI 3.0 specification written in YAML.

## How to View the Documentation

1.  **Open the `index.html` file in your web browser.**
    
    This file uses the Scalar API reference library to load the `openapi.yaml` file and render it as an interactive web page.

    For the best experience (and to avoid potential CORS issues with your browser), it's recommended to serve these files from a local web server. If you have Python installed, you can easily do this:

    ```bash
    # Navigate to the Content-Sentiment-Analyzer-Docs directory
    cd Content-Sentiment-Analyzer-Docs

    # Start a simple HTTP server (for Python 3)
    python -m http.server
    ```

    Then, open your web browser and go to `http://localhost:8000`.

    **Note:** The "Try it Out" feature will not be functional as it requires a live backend server. This documentation is for illustrative purposes on GitHub Pages.

## Project Structure

- `openapi.yaml`: The OpenAPI 3.0 specification that defines the API.
- `index.html`: The interactive documentation, which dynamically loads the `openapi.yaml` file.