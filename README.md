# matbanao
graph TD
    A[User Input] --> B[API Endpoint]
    B --> C{Sufficient Dataset?}
    C -->|No| D[Claude API]
    C -->|Yes| E[Hybrid Processing]
    E --> F[Vector Embedding Comparison]
    E --> G[Claude API for Nuanced Analysis]
    F --> H[Combine Results]
    G --> H
    D --> I[Store Result in Database]
    H --> I
    I --> J[Return Evaluation to User]
