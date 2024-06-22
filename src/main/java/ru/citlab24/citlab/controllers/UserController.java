package ru.citlab24.citlab.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.citlab24.citlab.entities.User;
import ru.citlab24.citlab.services.impl.UsersServiceImpl;

@AllArgsConstructor
@Controller
@RequestMapping("/users")
public class UsersController {
    private UsersServiceImpl usersService;

    @GetMapping("/add")
    public String showAddForm() {
        return "add_users_form";
    }

    @PostMapping("/add")
    public String saveNewUser(@ModelAttribute User user) {
        usersService.saveOrUpdate(user);
        return "redirect:/users/";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        model.addAttribute("user", usersService.findById(id));
        return "edit_users_form";
    }

    @PostMapping("/edit")
    public String modifyUser(@ModelAttribute User user) {
        usersService.saveOrUpdate(user);
        return "redirect:/users/";
    }
}