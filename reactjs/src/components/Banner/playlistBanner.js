import "./playlistBanner.css";
export default function PlayListBanner(props) {
	return (
		<div className="playlist">
			<div className="playlist__info">
				{/* <img src={discover_weekly?.images[0].url} alt="" /> */}
				<img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FDefault.jpg?alt=media&token=6bf68b0f-af7c-429a-987b-6ff4fd74beaf" />
				<div className="playlist__infoText">
					<strong>PLAYLIST</strong>
					<h2>{props.playlist.playlistName}</h2>
					<button className="play__button">
						<i class="fas fa-play"></i>
						<span style={{ margin: "0px 10px 0px 10px" }}>
							Phát lần lượt
						</span>
					</button>
					<button className="heart__button">
						<i class="fas fa-heart"></i>
					</button>
					<button className="share__button">
						<i class="fas fa-share"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
