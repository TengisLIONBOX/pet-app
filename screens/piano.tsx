import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
import { useEffect } from "react";

const notes: any = {
  A: require(`../notes/A5.mp3`),
  B: require(`../notes/B5.mp3`),
  C: require(`../notes/C5.mp3`),
  D: require(`../notes/D5.mp3`),
  E: require(`../notes/E5.mp3`),
  F: require(`../notes/F5.mp3`),
  G: require(`../notes/G5.mp3`),
};

const blacknotes: any = {
  Ab: require(`../notes/Ab5.mp3`),
  Bb: require(`../notes/Bb5.mp3`),
  Db: require(`../notes/Db5.mp3`),
  Eb: require(`../notes/Eb5.mp3`),
  Gb: require(`../notes/Gb5.mp3`),
};

const Tile = ({ note }: { note: string }) => {
  const playNote = async () => {
    await Audio.Sound.createAsync(notes[note], { shouldPlay: true });
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 10,
      }}
      activeOpacity={0.9}
      onPress={playNote}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderWidth: 1,
        }}
      />
    </TouchableOpacity>
  );
};

const BlackTile = ({ blacknote }: { blacknote: string }) => {
  const playNote = async () => {
    await Audio.Sound.createAsync(blacknotes[blacknote], { shouldPlay: true });
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: -10,
        marginRight: -10,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      activeOpacity={0.9}
      onPress={playNote}
    >
      <View
        style={{
          width: 20,
          height: 100,
          backgroundColor: "#000",
        }}
      />
    </TouchableOpacity>
  );
};

export const Piano = () => {
  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true }).then(() => {
      console.log("Play in silent mode active!");
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Tile note="B" />
        <BlackTile blacknote="Bb" />
        <Tile note="A" />
        <BlackTile blacknote="Ab" />
        <Tile note="G" />
        <BlackTile blacknote="Gb" />
        <Tile note="F" />
        <BlackTile blacknote="Eb" />
        <Tile note="E" />
        <BlackTile blacknote="Db" />
        <Tile note="D" />
        <Tile note="C" />
      </View>
    </View>
  );
};
