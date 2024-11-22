import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    //fetch data from TMDB API and update store
    const dispatch = useDispatch();

    // const getNowPlayingMovies = useSelector(
    //     (store) => store.movies.nowPlayingMovies
    // );
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;