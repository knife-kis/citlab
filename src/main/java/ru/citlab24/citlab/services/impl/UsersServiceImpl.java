package ru.citlab24.citlab.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.citlab24.citlab.entities.User;
import ru.citlab24.citlab.exceptions.UserNotFoundException;
import ru.citlab24.citlab.repositories.UsersRepository;

import java.util.List;

@Service
public class UsersService {
    private UsersRepository productsRepository;

    @Autowired
    public void setProductsRepository(UsersRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public User saveOrUpdate(User user) {
        return productsRepository.save(user);
    }

    public User findById(Long id) {
        return productsRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Can't found product with id = " + id));
    }

    public List<User> findAll() {
        return productsRepository.findAll();
    }

}
