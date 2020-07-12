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
  const ImageOfTheCity = $(`<img src="${cityImage.val()}">`).css(
    "width",
    "250px"
  );
  const cardBody = $("<div></div>").addClass("card-body");
  const nameOfTheCity = $(`<h5>${cityName.val()}</h5>`).addClass("card-title");
  const likeBtn = $(`<input type="button" id="Like">`)
    .addClass("btn btn-info")
    .val("like");
  let numOfLikes = 0;
  const LikesCounter = $(`<h6>${numOfLikes}👍</h6>`);
  mainDiv.append(ImageOfTheCity);
  mainDiv.append(cardBody);
  cardBody.append(nameOfTheCity);
  cardBody.append(likeBtn);
  cardBody.append(LikesCounter);
  cardsContainer.append(mainDiv);

  likeBtn.on("click", () => {
    setTimeout(() => {
      numOfLikes++;
      LikesCounter.text(numOfLikes + "👍");
    }, 2000);
  });
});
