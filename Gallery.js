const images = [
  {
    src: "gallery/1.jpg",
    caption: "Freshly baked bread straight from the oven.",
  },
  {
    src: "gallery/2.jpg",
    caption: "Delicious pasta topped with savory sauce.",
  },
  {
    src: "gallery/3.jpg",
    caption: "A juicy burger with all the toppings.",
  },
  {
    src: "gallery/4.jpg",
    caption: "A bowl of creamy soup served with warm bread.",
  },
  {
    src: "gallery/5.jpg",
    caption: "Colorful fresh salad with a tangy dressing.",
  },
  {
    src: "gallery/6.jpg",
    caption: "Crispy fries served with ketchup and mayonnaise.",
  },
  {
    src: "gallery/7.jpg",
    caption: "Grilled steak with a side of roasted vegetables.",
  },
  {
    src: "gallery/8.jpg",
    caption: "A deliciously decadent chocolate cake.",
  },
  {
    src: "gallery/9.jpg",
    caption: "Hot pizza with melted cheese and toppings.",
  },
  {
    src: "gallery/10.jpg",
    caption: "Freshly made sushi rolls with wasabi and soy sauce.",
  },
  {
    src: "gallery/11.jpg",
    caption: "A refreshing fruit smoothie to start your day.",
  },
  {
    src: "gallery/12.jpg",
    caption: "Vibrant cocktail served with a slice of lime.",
  },
  {
    src: "gallery/13.jpg",
    caption: "Ice cream sundae topped with chocolate syrup.",
  },
  {
    src: "gallery/14.jpg",
    caption: "Classic breakfast: eggs, bacon, and toast.",
  },
  {
    src: "gallery/15.jpg",
    caption: "A steaming bowl of ramen with soft-boiled eggs.",
  },
  {
    src: "gallery/16.jpg",
    caption: "Spicy tacos with a tangy salsa topping.",
  },
  {
    src: "gallery/17.jpg",
    caption: "Sizzling fajitas with grilled chicken and vegetables.",
  },
  {
    src: "gallery/18.jpg",
    caption: "Crispy spring rolls with dipping sauce.",
  },
  {
    src: "gallery/19.jpg",
    caption: "Homemade pie with fresh apples and cinnamon.",
  },
  {
    src: "gallery/20.jpg",
    caption: "Freshly squeezed orange juice in a glass.",
  },
  {
    src: "gallery/21.jpg",
    caption: "Delicious seafood platter with shrimp and lobster.",
  },
  {
    src: "gallery/22.jpg",
    caption: "A slice of warm, buttered cornbread.",
  },
];
// page size (6 images per page)
const pageSize = 8;
let currentPage = 0; // The current page starts at 0

const gallery = document.querySelector("#gallery .image-gallery");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

function renderImages() {
  // clear the current gallery content
  gallery.innerHTML = "";

  // calculate the start and end index for the current page
  const start = currentPage * pageSize;
  const end = start + pageSize;

  // get the current page's images
  const pageImages = images.slice(start, end);

  // add the images to the gallery
  pageImages.forEach((image) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.caption;
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = image.caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  });

  // enable/disable buttons based on current page
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage >= Math.floor(images.length / pageSize);
}

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderImages();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < Math.floor(images.length / pageSize)) {
    currentPage++;
    renderImages();
  }
});

// Show the image in full-screen mode when clicked
function show_img(e) {
  let clicked_img = e.target;
  img_con.style.display = "flex";
  larg_img.src = clicked_img.src;
}

// Close the image when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target === img_con) {
    img_con.style.display = "none";
  }
});

// Close the image when pressing the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    img_con.style.display = "none";
  }
});

renderImages();
