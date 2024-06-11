package ru.citlab24.citlab.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdditionalController {
    @GetMapping("/")
    public String mainPage() {
        return "index";
    }

    @GetMapping("/contact")
    public String contactPage() {
        return "contact";
    }

    @GetMapping("/service-details")
    public String servicePage() {
        return "service-details";
    }
}