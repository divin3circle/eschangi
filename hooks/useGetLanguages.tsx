"use client";
import { useState } from "react";


export function useGetLanguages() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

    return { selectedLanguage, setSelectedLanguage }
}
