import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredProductId, setHoveredProductId] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={styles.container}>
            {products.map(product => (
                <div
                    key={product.id}
                    style={hoveredProductId === product.id ? { ...styles.productCard, ...styles.productCardHover } : styles.productCard}
                    onMouseEnter={() => setHoveredProductId(product.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                >
                    <img src={product.image} alt={product.title} style={styles.productImage} />
                    <div style={styles.productDetails}>
                        <h2 style={styles.productTitle}>{product.title}</h2>
                        <p style={styles.productPrice}>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px',
    },
    productCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
    },
    productCardHover: {
        transform: 'scale(1.05)',
    },
    productImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    productDetails: {
        padding: '16px',
    },
    productTitle: {
        fontSize: '16px',
        margin: '0 0 8px 0',
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: '14px',
        color: '#555',
    },
};

export default ProductList;
