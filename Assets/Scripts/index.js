const products = [
    {
        name: "Chain Toy Set Type A",
        desc: "A vibrant set of 8 multi-colored chain link toys, perfect for sensory play and creativity! Snap, link, and build endless fun with 5 solid-colored links and 3 that glow in the dark.",
        info: {
            price: 5.00,
            stock: 1,
            color: "Multi",
            material: "PP (Polypropylene)",
            category: "Toys"
        },
        imgs: {
            main: { img: "Assets/Data/P0008/straight.png", tag: "Straightend Out" },
            first: { img: "Assets/Data/P0008/turned.png", tag: "Turned" },
            second: { img: "Assets/Data/P0008/connected.png", tag: "You can even link them together!" },
        }
    },
    {
        name: "Chain Toy Set Type B",
        desc: "A set of 3 glow-in-the-dark chain link toys in vibrant colors, perfect for fidgeting, creative play, or crafting unique shapes.",
        info: {
            price: 3.00,
            stock: 1,
            color: "Multi",
            material: "PP (Polypropylene)",
            category: "Toys"
        },
        imgs: {
            main: { img: "Assets/Data/P0009/straight.png", tag: "Straightend Out" },
            first: { img: "Assets/Data/P0009/turned.png", tag: "Turned" },
            second: { img: "Assets/Data/P0009/connected.png", tag: "You can even link them together!" },
        }
    },
    {
        name: "Etch A Sketch Doodle Mini",
        desc: "Compact and fun, the Etch A Sketch Doodle Mini lets you draw, shake to erase, and create again! Perfect for on-the-go creativity.",
        info: {
            price: 5.00,
            stock: 1,
            color: "Red & Yellow",
            material: "Plastic",
            category: "Toys"
        },
        imgs: {
            main: { img: "Assets/Data/P0007/front.png", tag: "Front" },
        }
    },
    {
        name: "Mesh And Marble Fidget",
        desc: "A set of 10 mesh and marble fidget sensory toys designed for stress relief, focus, and tactile stimulation. Compact, durable, and perfect for all ages to squeeze, slide, and calm the mind.",
        info: {
            price: 5.00,
            stock: 1,
            color: "Multi",
            material: "PVC",
            category: "Toys"
        },
        imgs: {
            main: { img: "Assets/Data/P0010/top.png", tag: "Top View" },
        }
    },
    {
        name: "Amazon Echo Spot",
        desc: "The Amazon Echo Spot is a compact smart assistant with a 2.5-inch display, perfect for managing your day. Use Alexa to set alarms, stream music, control smart home devices, and make video calls—all in a sleek, modern design.",
        info: {
            price: 100.00,
            stock: 1,
            color: "Black",
            material: "Plastic",
            category: "Electronics"
        },
        imgs: {
            main: { img: "Assets/Data/P0013/front.png", tag: "Front View" },
        }
    },
    {
        name: "Infinity Cube Type A",
        desc: "A vibrant yellow infinity cube made from durable ABS plastic, designed for endless flipping and stress relief. Compact, lightweight, and perfect for fidgeting anytime, anywhere.",
        info: {
            price: 2.00,
            stock: 2,
            color: "Yellow",
            material: "ABS",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0001/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0001/laying.png", tag: "Laying" },
        }
    },
    {
        name: "Infinity Cube Type B",
        desc: "A compact and durable pink infinity cube toy crafted from high-quality ABS plastic, designed for endless flipping and stress relief.",
        info: {
            price: 2.00,
            stock: 2,
            color: "Pink",
            material: "ABS",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0002/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0002/laying.png", tag: "Laying" },
        }
    },
    {
        name: "Infinity Cube Type C",
        desc: "A durable green infinity cube toy made of ABS plastic, offering smooth, endless folding for stress relief and focus. Compact, lightweight, and perfect for on-the-go fidgeting.",
        info: {
            price: 2.00,
            stock: 1,
            color: "Green",
            material: "ABS",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0003/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0003/laying.png", tag: "Laying" },
        }
    },
    {
        name: "Infinity Cube Type D",
        desc: "A sleek, space-themed infinity cube toy crafted from durable plastic, designed for endless fidgeting and stress relief with a galactic twist.",
        info: {
            price: 4.00,
            stock: 1,
            color: "Space Design",
            material: "Plastic",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0004/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0004/laying.png", tag: "Laying" },
            second: { img: "Assets/Data/P0004/packaging.png", tag: "Packaging" },
        }
    },
    {
        name: "Infinity Cube Type E",
        desc: "A mesmerizing infinity cube toy with a vibrant galaxy design, crafted from durable plastic for endless flipping fun. Perfect for stress relief and fidgeting!",
        info: {
            price: 4.00,
            stock: 1,
            color: "Galaxy Design",
            material: "Plastic",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0005/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0005/laying.png", tag: "Laying" },
            second: { img: "Assets/Data/P0005/packaging.png", tag: "Packaging" },
        }
    },
    {
        name: "Infinity Cube Type F",
        desc: "Graffiti-style infinity cube made of durable plastic, perfect for fidgeting and stress relief. Compact, vibrant, and fun!",
        info: {
            price: 4.00,
            stock: 2,
            color: "Graffiti Design",
            material: "Plastic",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0006/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0006/laying.png", tag: "Laying" },
        }
    },
    {
        name: "Infinity Cube Type G",
        desc: "A mesmerizing galaxy-themed infinity cube made of durable plastic, offering endless folding fun with a cosmic design that captivates and soothes.",
        info: {
            price: 4.00,
            stock: 1,
            color: "Galaxy Design",
            material: "Plastic",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0011/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0011/laying.png", tag: "Laying" },
        }
    },
    {
        name: "Infinity Cube Type H",
        desc: "A sleek and durable plastic infinity cube toy featuring a mesmerizing space-themed design, perfect for fidgeting, stress relief, and endless fun.",
        info: {
            price: 4.00,
            stock: 1,
            color: "Space Design",
            material: "Plastic",
            category: "Fidgets"
        },
        imgs: {
            main: { img: "Assets/Data/P0012/folded.png", tag: "Folded" },
            first: { img: "Assets/Data/P0012/laying.png", tag: "Laying" },
        }
    }
];

const fuse = new Fuse(products, {
    keys: ['name'],
    threshold: 0.4,
});

const productContainer = document.querySelector('.row.g-6');
const searchBar = document.querySelector('#search');
const filterSchool = document.querySelector('#filter-school');
const filterFidgets = document.querySelector('#filter-fidgets');
const filterToys = document.querySelector('#filter-toys');
const filterElectronics = document.querySelector('#filter-electronics');
const sortDropdown = document.querySelector('#sortitems');
const clearFiltersBtn = document.querySelector('#clearfilters');

let filteredProducts = [...products];

function renderProducts(items) {
    productContainer.innerHTML = '';
    items.forEach(product => {
        const productCard = `
            <div class="col-xl-3 col-sm-6">
                <div class="card shadow-4-hover">
                    <img class="rounded-top-2" src="${product.imgs.main.img}" alt="${product.name}">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-1">
                                <span class="d-block font-semibold text-sm text-heading">${product.name}</span>
                                <div class="text-xs text-muted">$${product.info.price.toFixed(2)}</div>
                            </div>
                            <button type="button" class="btn btn-sm btn-neutral" data-bs-toggle="offcanvas" data-bs-target="#product" onclick="showProductDetails('${product.name}')">
                                <i class="bi bi-folder2-open me-1"></i> View
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
        productContainer.insertAdjacentHTML('beforeend', productCard);
    });
}

function applyFilters() {
    const selectedCategories = [];
    if (filterSchool.checked) selectedCategories.push('School');
    if (filterFidgets.checked) selectedCategories.push('Fidgets');
    if (filterToys.checked) selectedCategories.push('Toys');
    if (filterElectronics.checked) selectedCategories.push('Electronics');

    filteredProducts = products.filter(product => {
        return selectedCategories.length === 0 || selectedCategories.includes(product.info.category);
    });

    applySorting();
}

function applySorting() {
    const sortBy = sortDropdown.value;
    if (sortBy === 'priceLowToHigh') {
        filteredProducts.sort((a, b) => a.info.price - b.info.price);
    } else if (sortBy === 'priceHighToLow') {
        filteredProducts.sort((a, b) => b.info.price - a.info.price);
    } else if (sortBy === 'nameAsc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'nameDesc') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    renderProducts(filteredProducts);
}

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
        const results = fuse.search(searchTerm).map(result => result.item);
        filteredProducts = results.filter(product => filteredProducts.includes(product));
    } else {
        applyFilters();
    }
    renderProducts(filteredProducts);
});

clearFiltersBtn.addEventListener('click', () => {
    filterSchool.checked = false;
    filterFidgets.checked = false;
    filterToys.checked = false;
    filterElectronics.checked = false;
    sortDropdown.value = 'relevance';
    searchBar.value = '';
    filteredProducts = [...products];
    renderProducts(filteredProducts);
});

function showProductDetails(productName) {
    const product = products.find(item => item.name === productName);
    document.querySelector('#productname').textContent = product.name;
    document.querySelector('#productdesc').textContent = product.desc;
    document.querySelector('#productprice').textContent = `$${product.info.price.toFixed(2)}`;
    document.querySelector('#productstock').textContent = product.info.stock;
    document.querySelector('#productcolor').textContent = product.info.color;
    document.querySelector('#productmaterial').textContent = product.info.material;

    const imagesTab = document.querySelector('#images .row');
    imagesTab.innerHTML = '';
    Object.values(product.imgs).forEach(img => {
        const imageCard = `
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <img class="img-fluid rounded-top-2" src="${img.img}" alt="${img.tag}">
                    <div class="px-4 pt-2 pb-4">
                        <h6 class="font-semibold mt-2">${img.tag}</h6>
                    </div>
                </div>
            </div>`;
        imagesTab.insertAdjacentHTML('beforeend', imageCard);
    });

    document.querySelector('.bg-cover').style.backgroundImage = `url(${product.imgs.main.img})`;
}

[filterSchool, filterFidgets, filterToys, filterElectronics, sortDropdown].forEach(el => {
    el.addEventListener('change', applyFilters);
});

renderProducts(filteredProducts);