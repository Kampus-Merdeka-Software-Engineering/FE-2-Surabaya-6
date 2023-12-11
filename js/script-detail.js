const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

// window.addEventListener('resize', slideImage);

//       document.addEventListener('DOMContentLoaded', () => {
//         let selectedProductData = JSON.parse(sessionStorage.getItem("selectedProduct"));

//         if (selectedProductData) {
//             let productId = selectedProductData.productId;
//             console.log('Product ID:', productId);
//         } else {
//             console.error('No selected product data found in sessionStorage');
//         }
//     });
      // Set the src attributes for the thumbnail images
      // imgItems.forEach((imgItem, index) => {
      //       imgItem.innerHTML = `
      //           <a href="#" data-id="${index + 1}">
      //               <img src="${product[`image${index + 1}`]}" alt="shoe image">
      //           </a>
      //       `;
      //   });

      //   // Add click event listeners to thumbnail images
      //   imgItems.forEach((imgItem, index) => {
      //       const dataIdValue = imgItem.getAttribute('data-id');
      //       imgItem.addEventListener('click', (event) => {
      //           event.preventDefault();
      //           console.log(`Clicked on image ${index + 1}, data-id: ${dataIdValue}`);
      //   });})
      // Detail page script
      window.addEventListener('load', () => {
        const selectedProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));
        if (selectedProduct) {
            // Update the HTML elements with the selected product details
            document.getElementById('product-title').textContent = selectedProduct.name;
            document.getElementById('new-price').innerHTML = `Price: <span>${selectedProduct.price}</span>`;
    
            // Mendapatkan elemen gambar berdasarkan ID
            var imge1 = document.getElementById("showcase1");
            var imge2 = document.getElementById("showcase2");
            var imge3 = document.getElementById("showcase3");
            var img1 = document.getElementById("img1");
            var img2 = document.getElementById("img2");
            var img3 = document.getElementById("img3");
    
            // Menetapkan sumber gambar
            imge1.src = selectedProduct.image1;
            imge2.src = selectedProduct.image2;
            imge3.src = selectedProduct.image3;
            img1.src = selectedProduct.image1;
            img2.src = selectedProduct.image2;
            img3.src = selectedProduct.image3;
    
            document.getElementById('product-detail').innerHTML = `
                <h2>About This Package:</h2>
                <h3>${selectedProduct.detail}</h3>
            `;
        } else {
            console.error('No selected product found in sessionStorage');
        }
    });
    
    // Loop through each img-item and get the data-id attribute
    document.addEventListener('DOMContentLoaded', () => {
        const imgItems = document.querySelectorAll('.img-item');
        const mainImage = document.querySelector('.img-showcase img');
    
        imgItems.forEach((imgItem, index) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
    
                // Get the clicked image's src attribute
                const clickedSrc = imgItem.querySelector('img').getAttribute('src');
    
                // Set the main image's src attribute to the clicked image's src
                mainImage.setAttribute('src', clickedSrc);
    
                // If you need to do something with the data-id value, you can access it like this:
                const dataIdValue = imgItem.getAttribute('data-id');
                console.log(`Clicked on image ${index + 1}, data-id: ${dataIdValue}`);
            });
        });
    });
    
        //   async function buyAndDelete(productId) {
        //     try{
        //     // Assuming deleteData contains the necessary data for deletion
        //       const response= await fetch(`http://localhost:3000/product/delete/${productId}`, {
        //           method: 'DELETE',
        //       });
        //       if (response.ok) {
        //         const idproduk = document.querySelector(`[data-id="${productId}"]`);
        //         if (idproduk) {
        //           idproduk.remove();
        //         } else {
        //           console.error('Id Produk Tidak Tersedia', productId);
        //         }
        //       } else {
        //         console.error('Error deleting news:', response.statusText);
        //       }
        //       } catch (error) {
        //         console.error('Error deleting news:', error);
        //         }
        //       }
        //     })
        

    
    // Mengambil nilai input dari formulir
    // const totalPerson = document.getElementById('totalPerson').value;
    // const fillDate = document.getElementById('date').value;
    

    // Membuat objek data invoice
    // const invoiceData = {
    //     totalPerson: totalPerson,
    //     fillDate: fillDate
    // };

    // Menggunakan metode POST atau GET untuk mengirim data ke halaman invoice.
    // Contoh menggunakan metode GET:
    // const invoiceURL = `invoice.html?totalPerson=${encodeURIComponent(totalPerson)}&fillDate=${encodeURIComponent(fillDate)}`;
    // window.location.href = invoiceURL;

    // Menyiapkan data untuk penghapusan di backend
    // const deleteData = {
    //     // Sesuaikan dengan data yang dibutuhkan untuk menghapus di backend
    //     totalPerson: totalPerson,
    //     fillDate: fillDate
      
      


    //  <script>
    //   document.addEventListener('DOMContentLoaded', function() {
    //       // Mengambil data dari session storage
    //       const searchData = JSON.parse(sessionStorage.getItem('searchData'));
      
    //       // Menampilkan data di halaman detail.html
    //       if (searchData) {
    //           // console.log('Place Name:', searchData.placeName);
    //           console.log('Date:', searchData.date);
    //           console.log('Number of Travelers:', searchData.numberOfTravelers);
    //       } else {
    //           console.error('No search data found in session storage');
    //       }
    //   });
    //     document.addEventListener('DOMContentLoaded', function() {
    //         // Mengambil parameter URL
    //         const urlParams = new URLSearchParams(window.location.search);
    //         const placeName = urlParams.get('placeName');
    //         const date = urlParams.get('date');
    //         const numberOfTravelers = urlParams.get('numberOfTravelers');

    //         // Menampilkan data di console atau sesuaikan sesuai kebutuhan Anda
    //         console.log('Place Name:', placeName);
    //         console.log('Date:', date);
    //         console.log('Number of Travelers:', numberOfTravelers);
  