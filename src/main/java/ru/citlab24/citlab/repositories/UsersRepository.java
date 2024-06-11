package ru.citlab24.citlab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import ru.citlab24.citlab.entities.User;

@Repository
public interface UsersRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
}