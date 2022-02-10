import React, { useState, useEffect, useRef } from "react";
import { View, Text, BackHandler, Alert, Animated } from "react-native";

const PageStackContainer = (props)=>{
    return (
        <View style={{flex:1}}>
            {props.children}
        </View>
    )
}

const PageStack = ({DefaultPage, Pages})=>{
    const [pageStack, setPageStack] = useState([DefaultPage]);

    const _to = (page)=>{
        if(Pages[page] === undefined){
            alert("Page not found")    
            return
        }
        setPageStack([...pageStack, page])
    }

    useEffect(() => {
        const backAction = () => {
            _back();
            return true;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, []);

    const _back = ()=>{
        pageStack.pop()
        setPageStack([...pageStack])
    }

    const _backto = (page)=>{
        const rindex = [...pageStack].reverse().indexOf(page)
        if(rindex < 0){
            alert("Page not found in stack")    
            return
        }
        for(let i = 0; i < rindex; i++){
            pageStack.pop()
        }
        setPageStack([...pageStack])
    }

    const _top = ()=>{
        setPageStack([pageStack[0]])
    }

    if(pageStack.length < 1){
        setPageStack([DefaultPage])
    }

    const Page = Pages[pageStack[pageStack.length-1]]

    //alert(pageStack)
    const FadeInView = (props) => {
        const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

        useEffect(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ).start();
        }, [fadeAnim])

        return (
            <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
            >
            {props.children}
            </Animated.View>
        );
    }

    return (
        <FadeInView style={{flex:1}}>
            <Page navigate={{to:_to, back:_back, backto:_backto, top:_top}}/>
        </FadeInView>
    );
}

export {PageStackContainer, PageStack};