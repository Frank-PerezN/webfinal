document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const reviewCards = document.getElementById("review-cards");
  
    // Array of reviews
    let reviewsArray = [
      {
        name: "Michael Jackson",
        date: "2023-02-03",
        rating: 5,
        comment: "HEE HEE",
      },
      {
        name: "Michael Jackson",
        date: "2023-11-16",
        rating: 4,
        comment: "This food was a thriller!",
      },
      {
        name: "Michael Jackson",
        date: "2023-10-23",
        rating: 3,
        comment: "All i got to say is Great food! But location was far for me",
      },
      {
        name: "Michael Jackson",
        date: "2023-02-03",
        rating: 1,
        comment: "Had a bad experience!",
      },
      {
        name: "Michael Jackson",
        date: "2023-02-03",
        rating: 2,
        comment: "I should try a different dish next time",
      }
    ];
  
    // mock reviews
    displayReviews();
  
    reviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const rating = parseInt(document.getElementById("rating").value);
      const comment = document.getElementById("comment").value;
  
      
      reviewsArray.push({ name, date, rating, comment });
  
      
      reviewCards.innerHTML = "";
      displayReviews();
  
      // Clear the form inputs
      reviewForm.reset();
    });
  
    function displayReviews() {
      reviewsArray.forEach((review) => {
        const reviewCard = createReviewCard(review);
        reviewCards.appendChild(reviewCard);
      });
    }
  
    function createReviewCard(review) {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");
  
      const starRating = generateStarRating(review.rating);
  
      reviewCard.innerHTML = `
        <h4>${review.name}</h4>
        <p>${review.date}</p>
        <p class="review-rating">${starRating}</p>
        <p>${review.comment}</p>
      `;
  
      return reviewCard;
    }
  
    function generateStarRating(rating) {
        const solidStar = '&#9733;';
        const outlinedStar = '&#9734;';
        const starIcons = `${solidStar.repeat(rating)}${outlinedStar.repeat(5 - rating)}`;
        return starIcons;
      }
      
  });
  