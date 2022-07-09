-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2022 at 01:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created`, `modified`) VALUES
(1, 'Emporio Armani', 'Collection emporio armani watches', '2014-06-01 00:35:07', '2014-05-30 15:34:33'),
(2, 'Casio', 'collection casio watches', '2014-06-01 00:35:07', '2014-05-30 15:34:33'),
(3, 'Rolex', 'collection rolex watches', '2014-06-01 00:35:07', '2014-05-30 15:34:54'),
(4, 'Garmin', 'collection Garmin watches', '0000-00-00 00:00:00', '2016-01-08 12:27:26'),
(5, 'Seiko', 'collection seiko watches', '0000-00-00 00:00:00', '2016-01-08 12:27:47');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `created`, `modified`) VALUES
(1, 'Seiko SNXS77K', 'Seiko SNXS77K Mens Watch Seiko 5 Automatic', '139', 5, '2014-06-01 01:13:45', '2014-05-31 00:13:39'),
(2, 'CASIO A158WEA-1EF', 'CASIO A158WEA-1EF Alarm Chrono Digital Watch', '34', 2, '2014-06-01 01:14:13', '2014-05-31 00:14:08'),
(3, 'Garmin Fenix 6s Pro GPS-Sportuhr', 'Garmin Fenix 6s Pro GPS-Sportuhr, 42mm', '399', 4, '2014-06-06 17:12:21', '2014-06-05 16:12:11'),
(4, 'EMPORIO ARMANI AR1811', 'EMPORIO ARMANI AR1811 Men\'s Watch Chronograph', '189', 1, '2014-06-06 17:12:59', '2014-06-05 16:12:49'),
(5, 'Rolex Cosmograph Daytona', 'Rolex Cosmograph Daytona', '42000', 3, '2022-07-08 01:51:31', '2022-07-07 23:51:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
