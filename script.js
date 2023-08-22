document.getElementById('bipcard-calculate-btn').addEventListener('click', calculateScore);
document.getElementById('bipcard-rating').addEventListener('input', function() {
  updateRatingValue();
  updateSpanPosition(this);
});
document.getElementById('bipcard-desired-rating').addEventListener('input', updateDesiredRatingValue);

function calculateScore() {
  var reviews = parseInt(document.getElementById('bipcard-reviews').value);
  var rating = parseFloat(document.getElementById('bipcard-rating').value);
  var desiredRating = parseFloat(document.getElementById('bipcard-desired-rating').value);

  if (isNaN(reviews) || isNaN(rating) || isNaN(desiredRating) || rating < 0 || rating > 5 || desiredRating < 0 || desiredRating > 5) {
    document.getElementById('bipcard-result').innerHTML = 'Please enter valid values.';
    return;
  }

  var currentScore = reviews * rating;
  var desiredScore = reviews * desiredRating;

  if (desiredRating === 5) {
    if (rating === 5) {
      document.getElementById('bipcard-result').innerHTML = 'You already have the desired rating.';
    } else {
      var targetReviews = Math.ceil((desiredScore - currentScore) / (5 - rating));
      document.getElementById('bipcard-result').innerHTML = + targetReviews + 'st';
    }
  } else if (desiredRating <= rating) {
    document.getElementById('bipcard-result').innerHTML = 'You already have the desired rating.';
  } else {
    var targetReviews = Math.ceil((desiredScore - currentScore) / (5 - desiredRating));
    document.getElementById('bipcard-result').innerHTML =  + targetReviews + 'st';
  }
}

function updateRatingValue() {
  var ratingValue = parseFloat(document.getElementById('bipcard-rating').value);
  document.getElementById('bipcard-rating-value').innerHTML = ratingValue.toFixed(1);
}

function updateDesiredRatingValue() {
  var desiredRatingValue = parseFloat(document.getElementById('bipcard-desired-rating').value);
  if (desiredRatingValue === 5) {
    document.getElementById('bipcard-desired-rating-value').innerHTML = '5.0';
  } else {
    document.getElementById('bipcard-desired-rating-value').innerHTML = desiredRatingValue.toFixed(1);
  }
}



    //  input ranger colors
function initializeSliderBackground(inputId) {
        var rangeInput = document.getElementById(inputId);
        var currentValue = parseFloat(rangeInput.value);
        var colorStop = (currentValue - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
        rangeInput.style.background = `linear-gradient(to right, #6461FC ${colorStop}%, #ECECEC ${colorStop}%)`;
      }

      // Initialize the slider background color for both sliders
      initializeSliderBackground('bipcard-rating');
      initializeSliderBackground('bipcard-desired-rating');

      // Update the slider track color while handle is being moved
      document.getElementById('bipcard-rating').addEventListener('input', function () {
        var rangeInput = document.getElementById('bipcard-rating');
        rangeInput.style.background = 'linear-gradient(to right, #ECECEC, #ECECEC)';
      });

      document.getElementById('bipcard-desired-rating').addEventListener('input', function () {
        var rangeInput = document.getElementById('bipcard-desired-rating');
        rangeInput.style.background = 'linear-gradient(to right, #ECECEC, #ECECEC)';
      });

      // Reset the slider track color after handle is released
      document.getElementById('bipcard-rating').addEventListener('mouseup', function () {
        initializeSliderBackground('bipcard-rating');
      });

      document.getElementById('bipcard-desired-rating').addEventListener('mouseup', function () {
        initializeSliderBackground('bipcard-desired-rating');
      });
      
      <!-- rating review styling -->
    function updateReviewsValue(value) {
  var rangeInput = document.getElementById('bipcard-reviews');
  var span = document.getElementById('bipcard-reviews-value');
  var percent = (value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
 

  var colorStop = (value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
  rangeInput.style.background = `linear-gradient(to right, #6461FC ${colorStop}%, #ECECEC ${colorStop}%)`;

  rangeInput.addEventListener('input', function () {
    rangeInput.style.background = 'linear-gradient(to right, #ECECEC, #ECECEC)';
  });

  rangeInput.addEventListener('mouseup', function () {
    rangeInput.style.background = `linear-gradient(to right, #6160F7 ${colorStop}%, #ECECEC ${colorStop}%)`;
  });
}

// Initialize the slider background color
initializeSliderBackground('bipcard-reviews');

// Update the slider track color while handle is being moved
document.getElementById('bipcard-reviews').addEventListener('input', function () {
  var rangeInput = document.getElementById('bipcard-reviews');
  rangeInput.style.background = 'linear-gradient(to right, #ECECEC, #ECECEC)';
});

// Reset the slider track color after handle is released
document.getElementById('bipcard-reviews').addEventListener('mouseup', function () {
  initializeSliderBackground('bipcard-reviews');
});
