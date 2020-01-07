import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    language = 'english';
    // language = 'french';

    months = {
        french: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        english: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };

    weeks = {
        french: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        english: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };

    dictionary = {
        french: {
            lang: 'Choisissez votre langue',
            french: 'Français',
            english: 'Anglais',
            month: 'Mois',
            week: 'Semaine',
            wait: 'S\'il vous plaît, attendez',
            loading: 'Chargement',
            networkConnectionChecking: 'Vérification de la connexion réseau',
            login: 'Se connector',
            logout: 'Se déconnecter',
            register: 'S’inscrire',
            password: 'Mot de passe',
            passwordConfirm: 'Confirmer le mot de passe',
            email: 'Email',
            fullName: 'Nom et prénom',
            proEmail: 'Email professionnel',
            phoneNumber: 'Numéro de téléphone',
            rememberMe: 'Rester connecter',
            acceptTerms: 'J\'ai lu et j\'accepte les termes et les d\'conditions',
            alreadyMember: 'Déja membre?',
            notMember: 'Vous n\'avez pas de compte?',
            forgotPassword: 'Mot de passe oublié',
            resetPassword: 'Réinitialiser le mot de passe',
            myFavorite: 'Mes favoris',
            activity: 'Activité',
            favorite: 'Favoris',
            changeLanguage: 'Changer de langue',
            addPhoto: 'Ajoute ta photo',
            faq: 'Aide et assistance',
            overview: 'Vue d\'ensemble',
            wellbeingScore: 'Ton score bien être',
            stressScore: 'Ton score le stress',
            lastScore: 'Dernier score',
            prevMonthScore: 'score précédent',
            firstScore: 'premier score',
            coachSessions: 'Sessions avec coach',
            toolUsed: 'Outils testés',
            submit: 'Envoyer',
            registerHere: 'Inscrivez-vous ici',
            verifyAccount: 'Vérification',
            needVerify: 'Veuillez vérifier votre boîte e-mail. Vous avez reçu un lien pour vous authentifier.',
            resetConfirm: 'Veuillez vérifier votre boîte e-mail. Vous avez reçu un lien pour réinitialiser votre mot de passe',
            startQuestion: 'Comment vous sentez-vous cette semaine?',
            goodMorning: 'Bonjour',
            start: 'Commencer',
            skip: 'Sauter',
            main: 'Accueil',
            surveys: 'Enquêtes',
            coaching: 'Coaching',
            'micro-learning': 'Micro Learning completed',
            'micro-tab': 'Micro Learning',
            tools: 'Outils',
            profile: 'Profil',
            'video-summary': 'Vidéo',
            'breathing-select': 'Respiration consciente',
            play: 'Voir',
            playVideo: 'Voir la video',
            wellnessCheck: 'ENQUÊTE BIEN-ÊTRE',
            getWellingScore: 'OBTENEZ VOTRE SCORE DE BIEN-ÊTRE',
            stressCheck: 'ENQUÊTE NIVEAU DE STRESS',
            coachingCheck: 'CALENDRIER VOTRE NOMINATION',
            getWellBeingScore: 'Whre attention goes flows',
            coachingComingSoon: 'Séance de coaching à venir',
            coachingBookSession: 'Réservez votre prochaine session de coaching',
            whenSessionTitle: 'Quand prendre rendez-vous?',
            whenSessionDescription: 'A coaching session may be right for you if you`re looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help.<br><br>' +
                'We also have therapists who are specialized in specific issues, such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, self-esteem and more. OminumPro is not the right solution for you in case of an urgent crisis or if you have been diagnosed with a severe mental illness.',
            howWorkTitle: 'Comment cela fonctionne?',
            howWorkStepDescription1: 'Answer a few simple questions so that we get to know you',
            howWorkStepDescription2: 'We match you with the right professional',
            howWorkStepDescription3: 'Pick a day and time that works for you',
            howWorkStepDescription4: 'Receive an email with all the information to login to your session',
            nextSession: 'Prochaine session',
            contactCoach: 'Parler avec notre coach',
            scheduleSession: 'Programmer une session',
            whatUsersSay: 'Témoignages?',
            startSurveys: 'Tous les mois, mesure ton score de bien-être et ton niveau de stress',
            breathingExercise: 'Exercice de respiration',
            mindfulExercise: 'Exercice de pleine conscience',
            breatheOut: 'Expirez',
            breatheIn: 'Inspirez',
            hold: 'Pause',
            secureStore: 'Vos réponses sont et resteront strictement confidentielles et anonymes',
            beforeWellBeingQuestion: 'Les 6 prochaines questions s’inspirent du questionnaire de santé  mentale conçu par l’Organisation Mondiale de la Santé (OMS).<br><br>Ces questions vous fournissent un score de bien-être sur 100% et peuvent vous aider à évaluer ce dont vous avez besoin en ce moment dans votre vie pour mieux vous sentir. ',
            beforeStressQuestion: 'This self-assessment takes less than 2 minutes to complete and will provide you a snapshot of your stress levels and mental fitness alongside global averages',
            beforeCoachingQuestion: 'To match you with the most suitable professional and proceed with scheduling your appointment, please answer the followingquestions about yourself and the issues you\'d like to deal with.<br><br> It takes less than 3 minutes to complete!<br><br> Your answers are strictly confidential and will only be accessed by your matching coach or therapist.',
            startSurvey: 'Démarrer l’enquête',
            completeSurvey: 'Étude complète',
            videoSummary: 'Résumé',
            balanceBreathing: 'Balance<br>Breathing',
            relaxBreathing: 'Relaxing<br>Breathing',
            fallBreathing: 'Falling asleep<br>Breathing',
            energyBreathing: 'Energizing<br>Breathing',
            lastChecked: 'Last Checked'
        },
        english: {
            lang: 'Choose your language',
            french: 'French',
            english: 'English',
            month: 'Month',
            week: 'Week',
            wait: 'Please wait',
            loading: 'Loading',
            networkConnectionChecking: 'Checking Network Connection',
            login: 'Sign in',
            logout: 'Sign out',
            register: 'Sign up',
            password: 'Password',
            passwordConfirm: 'Confirm Password',
            email: 'Email',
            fullName: 'Full Name',
            proEmail: 'Professional Email',
            phoneNumber: 'Phone Number',
            rememberMe: 'Remember Me',
            acceptTerms: 'I have read and agree to Ominumpro’s Terms & Conditions and Privacy Policy',
            alreadyMember: 'Already have an account?',
            notMember: 'Don\'t you have an account?',
            forgotPassword: 'Forgot Password',
            resetPassword: 'Reset Password',
            myFavorite: 'My Favorites',
            activity: 'Activity',
            favorite: 'Favorites',
            changeLanguage: 'Change Language',
            addPhoto: 'Add your photo',
            faq: 'Faq',
            overview: 'Overview',
            wellbeingScore: 'Your Wellbeing Score',
            stressScore:'Your Stress Score',
            lastScore: 'Last Score (Date)',
            prevMonthScore: 'Previous Score (Date)',
            firstScore: 'First Score (Date)',
            coachSessions: 'Sessions completed',
            toolUsed: 'Tool Used',
            submit: 'Submit',
            registerHere: 'Create account',
            verifyAccount: 'Verification',
            needVerify: 'Please check your emails to confirm you subscription to OminumPro.',
            resetConfirm: 'Please check your email. You have received a link to reset your password',
            goodMorning: 'Good Morning',
            startQuestion: 'How are you feeling this week?',
            start: 'Get Started',
            skip: 'Skip',
            main: 'Home',
            surveys: 'Surveys',
            coaching: 'Coaching',
            'micro-learning': 'Micro Learning completed',
            'micro-tab': 'Micro Learning',
            tools: 'Tools',
            profile: 'Profile',
            'video-summary': 'Video',
            'breathing-select': 'Conscious Breathing',
            play: 'Start',
            playVideo: 'Play Video',
            wellnessCheck: 'WELLNESS CHECK',
            getWellingScore: 'GET YOUR WELLBEING SCORE',
            stressCheck: 'STRESS CHECK',
            coachingCheck: 'SCHEDULE YOUR APPOINTMENT',
            getWellBeingScore: 'Get you welbeing score',
            coachingComingSoon: 'Upcoming coaching session',
            coachingBookSession: 'Book your next coaching session',
            whenSessionTitle: 'When to schedule a session?',
            whenSessionDescription: 'A coaching session may be right for you if you`re looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help.<br><br>' +
                'We also have therapists who are specialized in specific issues, such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, self-esteem and more. OminumPro is not the right solution for you in case of an urgent crisis or if you have been diagnosed with a severe mental illness.',
            howWorkTitle: 'How does it work?',
            howWorkStepDescription1: 'Answer a few simple questions so that we get to know you',
            howWorkStepDescription2: 'We match you with the right professional',
            howWorkStepDescription3: 'Pick a day and time that works for you',
            howWorkStepDescription4: 'Receive an email with all the information to login to your session',
            nextSession: 'Next Session',
            contactCoach: 'Talk to a coach',
            scheduleSession: 'Schedule Session',
            whatUsersSay: 'What users say?',
            startSurveys: 'Let’s start your wellness check and measure your stress levels',
            breathingExercise: 'Breathing Exercise',
            mindfulExercise: 'Mindfulness Exercise',
            breatheOut: 'Breathe Out',
            breatheIn: 'Breathe In',
            hold: 'Hold',
            secureStore: 'Your information is stored securely and strictly confidential',
            beforeWellBeingQuestion: 'These next 6 questions are based on World Health Organisation measure.<br><br>It’s short and it can give you an accurate wellbeing score out of 100 and also help you figure out what could make you feel better.',
            beforeStressQuestion: 'This self-assessment takes less than 2 minutes to complete and will provide you a snapshot of your stress levels and mental fitness alongside global averages',
            beforeCoachingQuestion: 'To match you with the most suitable professional and proceed with scheduling your appointment, please answer the followingquestions about yourself and the issues you\'d like to deal with.<br><br> It takes less than 3 minutes to complete!<br><br> Your answers are strictly confidential and will only be accessed by your matching coach or therapist.',
            startSurvey: 'Start Survey',
            completeSurvey: 'Complete Survey',
            videoSummary: 'Summary',
            balanceBreathing: 'Balance<br>Breathing',
            relaxBreathing: 'Relaxing<br>Breathing',
            fallBreathing: 'Falling asleep<br>Breathing',
            energyBreathing: 'Energizing<br>Breathing',
            lastChecked: 'Last Checked'
        }
    };

    constructor() {
    }

    setLanguage(language: string) {
        this.language = language;
    }

    getCurrentLanguage() {
        return this.language;
    }

    getWordByLanguage(word: string) {
        return this.dictionary[this.language][word];
    }

    getMonthNames() {
        return this.months[this.language];
    }

    getWeekNames() {
        return this.weeks[this.language];
    }
}
