import React from "react";

const PlayerList = (props) => {
    const players = props.players;
    const players_list = players.map((player) => {
        return <li>{player}</li>
    });

    return <ul>{players_list}</ul>;

};

export default PlayerList;