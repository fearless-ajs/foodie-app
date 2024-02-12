'use client';

import classes from './image-picker.module.css';
import React, {ChangeEventHandler, ReactEventHandler, useRef, useState} from 'react';
import {images} from 'next/dist/build/webpack/config/blocks/images';
import Undici from 'undici-types';
import FileReader = Undici.FileReader;

interface IImagePickerProps {
    label: string,
    name: string
}
export default function ImagePicker({ label, name }: IImagePickerProps){
    const imageInput = useRef<HTMLInputElement>(null);
    const [pickedImage, setPickedImage ] = useState<any>();

    function handlePickClick(){
        imageInput.current!.click();
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>){
        const file = event.target.files![0];

        if (!file){
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);

    }

    return (
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={imageInput}
                onChange={handleImageChange}
            />
            <button
                className={classes.button}
                type="button"
                onClick={handlePickClick}
            >
                Pick An Image
            </button>
        </div>
      </div>
    );
}