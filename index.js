const cityName = $("#cityName");
const cityImage = $("#cityImg");
const addCityBtn = $("#addCity");
const cardsContainer = $("#cardsContainer");

addCityBtn.submit((e) => {
  e.preventDefault();
});

addCityBtn.on("click", () => {
  const mainDiv = $("<div></div>")
    .addClass("card")
    .css({ display: "inline-block" });
  const ImageOfTheCity = $(`<img src="${cityImage.val()}">`).addClass(
    "card-img-top"
  );
  const cardBody = $("<div></div>").addClass("card-body");
  const nameOfTheCity = $(`<h5>${cityName.val()}</h5>`).addClass("card-title");
  const p = $(`<p>${cityName.val()} is The Best City Ever !!!</p>`);
  const likeBtn = $(`<input type="button" id="Like">`)
    .addClass("btn btn-info")
    .val("like");
  let numOfLikes = 0;
  const LikesCounter = $(`<h6>${numOfLikes}👍</h6>`);
  mainDiv.append(ImageOfTheCity);
  mainDiv.append(cardBody);
  cardBody.append(nameOfTheCity);
  cardBody.append(p);
  cardBody.append(likeBtn);
  cardBody.append(LikesCounter);
  cardsContainer.append(mainDiv);

  likeBtn.on("click", () => {
    setTimeout(() => {
      (function plusOne() {
        numOfLikes++;
        LikesCounter.text(numOfLikes + "👍");
      })();
    }, 2000);
  });
});
